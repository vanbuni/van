student_scores = {
  "Harry": 81,
  "Ron": 78,
  "Van": 99, 
  "Draco": 74,
  "Neville": 62,
}
# 🚨 Don't change the code above 👆

#TODO-1: Create an empty dictionary called student_grades.
student_grades = {}

#TODO-2: Write your code below to add the grades to student_grades.👇


for student in student_scores:
    score = student_scores[student]
    if score > 90:
        student_grades[student] = 'Outstanding'
    elif score > 80:
        student_grades[student] = 'Exceeds expectations'
    elif score > 70:
        student_grades[student] = 'Acceptable'
    else:
        student_grades[student] = 'Fail'




# for grade in student_scores:
#     if student_scores[grade] > 91:
#         student_grades[grade] = "Outstanding"
#     elif student_scores[grade] > 81 and student_scores[grade] < 91:
#         student_grades[grade] = "Exceeds expectations"
#     elif student_scores[grade] > 71 and student_scores[grade] < 80:
#         student_grades[grade] = "Acceptable"
#     elif student_scores[grade] < 70:
#         student_grades[grade] = "Fail"
            

# 🚨 Don't change the code below 👇
print(student_grades)