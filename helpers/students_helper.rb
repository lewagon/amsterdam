module StudentsHelper
  def student_attributes(batch, student)
    attributes    = []
    students      = data.students["batch_#{batch}"]
    student_index = students.index(student)
    student_id    = student_index + 1
    prev_student  = students[student_index - 1]
    next_student  = students[student_index + 1]

    attributes << "id=\"#{student_id}\""
    attributes << "data-href=\"#{student.url}\""

    if student.fake
      attributes <<  "data-fake=\"true\""
    end

    if prev_student
      prev_student_id = student_id - 1
      prev_student_id -= 1 if prev_student.fake

      attributes << "data-prev=\"#{prev_student_id}\""
    end

    if next_student != students.last
      next_student_id = student_id + 1
      next_student_id += 1 if next_student.fake

      attributes << "data-next=\"#{next_student_id}\""
    end

    attributes.join(' ')
  end
end
