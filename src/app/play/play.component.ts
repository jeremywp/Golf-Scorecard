import { Component, OnInit } from '@angular/core';
import {PlayService} from "./play.service";
import {CourseService} from "../course.service";
import {Player} from "../player";
import {AngularFirestore} from "@angular/fire/firestore";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  public courseId: string;
  private courseData$: any;
  private tee;
  private numberOfPlayers;
  public players: Player[];
  totalYards: number = 0;
  totalPar: number = 0;
  totalHcp: number = 0;
  game: {};
  gameRef;
  saved: boolean;

  constructor(private playService: PlayService,
              private courseService: CourseService,
              private afs: AngularFirestore,
              private toastr: ToastrService) {
    this.playService.newUrl();
    this.courseSubscribe();
    this.tee = this.courseService.tee;
    this.gameRef = this.afs.collection<Player[]>("game");
  }

  ngOnInit() {
   this.numberOfPlayers = this.courseService.numberOfPlayers;
   this.players = this.playService.players;
  }

  async courseSubscribe() {
    await this.playService.getCourseData().subscribe(data => {
      // @ts-ignore
      this.courseData$ = data.data.holes;
      console.log(this.courseData$);
      this.sumTotals();
    });

  };

  sumTotals() {
    for (let i=0; i < 18; i++) {
      this.totalYards += parseInt(this.courseData$[i].teeBoxes[this.tee].yards,10);
      this.totalPar += parseInt(this.courseData$[i].teeBoxes[this.tee].par,10);
      this.totalHcp += parseInt(this.courseData$[i].teeBoxes[this.tee].hcp,10);
    }
  }

  addScores(i) {
    this.players[i].total=0;
    for (let p=0; p < 18; p++) {
      this.players[i].total += this.players[i].score[p];
    }
  }

  updatePlayerName(i) {
    this.playService.players[i].name = this.players[i].name;
    console.log(this.players[i].name)
  }

  saveGame() {
    this.game = this.playService.players.reduce(function(acc, cur, i){
      acc[i] = cur;
      return acc;
    }, {});
    this.afs.collection('game').add(this.game);
    this.toastr.success('Game saved!')
  }
}
