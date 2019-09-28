import csv
from quiz.models import Question, Quiz


#if __name__ == "__main__":
q = Quiz.objects.create(title='testtti')
with open('quiz/questions.csv', newline='') as csvfile:
	reader = csv.DictReader(csvfile, fieldnames=['title', 'category'], delimiter=';')
	for row in reader:
		Question.objects.create(quiz=q, title=row['title'], category=row['category'])
		print(row['title'], row['category'])



