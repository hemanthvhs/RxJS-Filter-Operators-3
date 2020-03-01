import { Component,OnInit } from '@angular/core';
import {of,concat,} from 'rxjs';
import {filter,map,tap} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    const source1$ = of(1,2,3);
    const source2$ = of(4,5,6);
    const source3$ = of(7,8,9);

    const result$ = concat(source1$,source2$,source3$).pipe(
                    map((res) => res * 2),
                    filter((multipliedRes) => multipliedRes > 10)
    )

    result$.subscribe(console.log)

  }

  /* 
                    ******* filter ********
  
    Filter items emitted by the source Observable by only emitting those that satisfy a specified condition.

    normally the output of concat(source1$,source2$,source3$) in the console gives 1,2,3,4,5,6,7,8,9

    with the help of map operator we have multiplied our stream of values with 2.

    therefore stream of values now becomes 2,4,6,8,10,12,14,16,18

    now we have applied filter on the source Observable result$ which will filter out the values greater than 10.

    Therefore final output will be 12,14,16,18
  
   */
  

}
