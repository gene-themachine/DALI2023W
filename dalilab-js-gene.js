DC = FileAttachment("Dartmouth - Courses.csv").csv({ typed: true }); 
Plot.plot({
  title: "Average GPA by Department (2021 & 2022 combined)",
  width: 2000,
  height: 500,
  marks: [
    Plot.barY(
      DC,
      Plot.groupX(
        { y: "mean" },
        { x: "Department", y: "Median GPA Points", tip: true }
      )
    ),
    Plot.ruleY([0])
  ]
})

DC = DC.filter(item => item.Year === 2021);


Plot.plot({
  title: "Average GPA by Department (2021 only)",
  height: 500,
  width: 2000,
  marks: [
    Plot.barY(
      DC,
      Plot.groupX(
        { y: "mean" },
        { x: "Department", y: "Median GPA Points", tip: true }
      )
    ),
    Plot.ruleY([0])
  ]
})
