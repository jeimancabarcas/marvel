import {Component, OnInit, ViewChild} from '@angular/core';
import {Comic} from '../../models/comic';
import {ComicService} from '../../services/comic.service';
import {Filters} from '../../models/filters';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss'],
})
export class ComicsListComponent implements OnInit {

  filters: Filters = new Filters();
  imgTemplateUrl = 'https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png';
  comics: Comic[] = [];

  constructor(private comicService: ComicService) { }

  ngOnInit() {

    this.getComics();

  }

  getComics(filters = new Filters()) {

    this.comicService.getComics(filters).subscribe(response => {
      response.data.results.map(comic => {
        const imgUrl = comic.images[0] ?
          `${comic.images[0].path}/detail.${comic.images[0].extension}` : this.imgTemplateUrl;
        this.comics.push({
          title: comic.title,
          description: comic.description,
          image : imgUrl,
          shortDescription: comic.variantDescription,
          votes: 0
        });
      });
    });

  }

  vote(comic, isLike) {

    if (comic.votes >= 0 && isLike) {
      comic.votes++;
    } else if (comic.votes > 0 && !isLike){
      comic.votes--;
    }

  }

  loadData(event) {

    this.filters.offset += 5;
    this.comicService.getComics(this.filters).subscribe(response => {
      response.data.results.map(comic => {
        const imgUrl = comic.images[0] ?
          `${comic.images[0].path}/detail.${comic.images[0].extension}` : this.imgTemplateUrl;
        this.comics.push({
          title: comic.title,
          description: comic.description,
          image : imgUrl,
          shortDescription: comic.variantDescription,
          votes: 0
        });
      });
      event.target.complete();
    });

  }

}
