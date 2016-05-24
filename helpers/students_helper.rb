module StudentsHelper
  def student_attributes(batch, student)
    students      = students_for_batch(batch)
    student_index = students.index(student)
    attributes    = [
      "id=\"#{student_index + 1}\" data-href=\"#{student.url}\"",
      student_fake_attribute(student),
      student_sibling_attributes(:prev, students, student_index),
      student_sibling_attributes(:next, students, student_index)
    ]

    attributes.compact.join(' ')
  end

  def students_for_batch(batch)
    data.students["batch_#{batch}"]
  end

  private

  def student_fake_attribute(student)
    return unless student.fake
    "data-fake=\"true\""
  end

  def student_sibling_attributes(side, students, student_index)
    step            = (side == :prev ? -1 : 1)
    sibling_student = students[student_index + step]
    return if [nil, students.last].include?(sibling_student)

    student_id         = student_index + 1
    sibling_student_id = student_id + step
    sibling_student_id += step if sibling_student.fake

    "data-#{side}=\"#{sibling_student_id}\""
  end
end
