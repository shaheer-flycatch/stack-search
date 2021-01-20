import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ListServiceService } from 'src/app/services/list-service.service';
import { List } from 'src/app/_models/list';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private listPageService: ListServiceService) { }
  answers;
  questionId;
  selectedQuestion = {};
  allItems;
  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get("id");
    this.allItems = JSON.parse(localStorage.getItem('selectedItem'));
    this.selectedQuestion = this.allItems.find(selectedQuestion => {
      return selectedQuestion.question_id == this.questionId;
    }
    )

    this.getAllAnsweres();

  }
  getAllAnsweres() {

    this.listPageService.getAllAnsweres(this.questionId).subscribe((data: List) => {
      this.answers = data.items.map((item) => {
        return item;
      })
    })


  }
}
