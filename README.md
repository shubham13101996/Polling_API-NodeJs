## Polling_API(NodeJs)

This is a backend project intended to used at platforms where polling/voting type of situation is expected. With this API you can do the following activities:

1.Create your own questions
2.Delete the questions
3.Add Options to the question
4.View question along with its options
5.Delete Options
6.Add Votes to the option

## Important endpoints of the API:

open PostMan Application and try running these commands<br/>
1.For creating question--> localhost:8000/question/create <br/>
method: POST , here you have to give key as title and value as question<br/>

2.For deleting question--> localhost:8000/question/:id/delete<br/>
method: DELETE , here you have to give \_id of that question<br/>

3.For creating option to question--> localhost:8000/question/:id/options/create<br/>
method: POST, here you have to give key as text & value as option, also you need to give \_id<br/>

4.For showing selected question with option--> localhost:8000/question/:id <br/>
method: GET, here you have to give \_id of that question<br/>

5.For deleting a particular option--> localhost:8000/option/:id/delete <br/>
method: DELETE, here you have to give \_id of that particular option<br/>

6.For adding vote to option--> localhost:8000/option/:id/add_vote <br/>
method: POST, here you have to give \_id of that option<br/>

## Important Link:

Video Explaination:

## Tech Stack:

NodeJS
MongoDB

## Dependencies:

"express"
"mongoose"
