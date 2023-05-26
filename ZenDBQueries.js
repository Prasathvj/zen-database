//Q.1. Find all the topics and tasks which are thought in the month of October

    db.topics.aggregate([
        {
        $lookup: {
            from: "tasks",
            localField: "_id",
            foreignField: "topicId",
            as: "tasks"
        }
        },
        {
        $match: {
            "tasks.date": {
            $gte: "2023-10-01",
            $lte: "2023-10-31"
            }
        }
        }
    ])
  
//----------------------------------------------------------------------------------
//Q.2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companyDrives.find(
    {date:{
        $gte:"2023-10-15",
        $lte:"2023-10-31"
    }
})

//----------------------------------------------------------------------------------
//Q.3. Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "_id",
        foreignField: "companyDriveId",
        as: "attendance"
      }
    },
    {
      $match: {
        "attendance.present": true
      }
    }
  ])

 //---------------------------------------------------------------------------------- 
//Q.4. Find the number of problems solved by the user in codekata
db.codekata.aggregate([
    {
      $match: {
        user_id: ObjectId("user_id")
      }
    },
    {
      $group: {
        _id: null,
        total_problems_solved: { $sum: "$problem_count" }
      }
    }
  ])

//----------------------------------------------------------------------------------  
//Q.5. Find all the mentors with who has the mentee's count more than 15

db.mentors.find({
    mentee_count: { $gt: 15 }
  })


//----------------------------------------------------------------------------------  
//Q.6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "_id",
        foreignField: "user_id",
        as: "attendance"
      }
    },
    {
      $lookup: {
        from: "tasks",
        localField: "_id",
        foreignField: "user_id",
        as: "tasks"
      }
    },
    {
      $match: {
        attendance: { $elemMatch: { date: { $gte: "2020-10-15", $lte:"2020-10-31"}, status: "Absent" } },
        tasks: { $not: { $elemMatch: { date: { $gte: "2020-10-15", $lte: "2020-10-31" }, status: "Submitted" } } }
      }
    },
    {
      $count: "total_users"
    }
  ])
  //----------------------------------------------------------------------------------
  