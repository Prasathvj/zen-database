db.users.insertMany([
    {
      
      "name": "gokul",
      "email": "gokule@example.com",
      "role": "student"
    },
    {
   
      "name": "prasth",
      "email": "prasath@example.com",
      "role": "student"
    },
    {
    
      "name": "pooovarasn",
      "email": "poova@example.com",
      "role": "students"
    }
  ])
  
  db.codekata.insertMany([
      {
        
        "user_id": 1,
        "problem_id": 2,
        "submission_date":"2022-10-10"
      },
      {
       
        "user_id":2,
        "problem_id": 3,
        "submission_date":"2022-10-12"
      },
      {
        
        "user_id": 3,
        "problem_id":5,
        "submission_date":"2022-10-15"
      }
    
  ])

 db.attendance.insertMany(
  [
    {
    
      "user_id": 1,
      "date": "2022-10-05",
      "is_present": true
    },
    {
    
      "user_id": 2,
      "date": "2022-10-05",
      "is_present": true
    },
    {
      
      "user_id": 3,
      "date":"2022-10-12",
      "is_present": false
    }
  ]
  
 ) 

 db.topics.insertMany(
  [
    {
      
      "name": "Arrays"
    },
    {
    
      "name": "Strings"
    },
    {
     
      "name": "Sorting"
    }
  ]
  
 )

 db.tasks.insertMany(
  [
    {
      
      "topic_id": 11,
      "name": "Find the missing number",
      "deadline":"2022-10-20"
    },
    {
    
      "topic_id":12,
      "name": "Reverse a string",
      "deadline":"2022-10-25"
    },
    {
      "topic_id": 13,
      "name": "Bubble sort",
      "deadline":"2022-10-30"
    }
  ]
  
 )

 db. companyDrives.insertMany(
  [
    {
      
      "name": "XYZ Corp Placement Drive",
      "date": "2022-10-15"
    },
    {
      
      "name": "ABC Inc Placement Drive",
      "date": "2022-10-25"
    }
  ]
  
 )

 db.mentors.insertMany(
  [
    {
      
      "name": "David Wilson",
      "mentee_count": 20
    },
    {
      
      "name": "Sarah Thompson",
      "mentee_count": 10
    },
    {
      
      "name": "Sarah gill",
      "mentee_count": 10
    }
  ]
  
 )



 
