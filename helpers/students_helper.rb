module StudentsHelper
  def student_attributes(students)
    attributes = []
    prev_student, current_student, next_student = students

    attributes << "id=\"#{current_student.id}\""
    attributes << "data-href=\"#{current_student.url}\""

    if current_student.fake
      attributes <<  "data-fake=\"true\""
    end

    if prev_student
      prev_student_id = prev_student.id
      prev_student_id -= 1 if prev_student.fake

      attributes << "data-prev=\"#{prev_student_id}\""
    end

    if next_student && !next_student.last
      next_student_id = next_student.id
      next_student_id += 1 if next_student.fake

      attributes << "data-next=\"#{next_student_id}\""
    end

    attributes.join(' ')
  end
end
