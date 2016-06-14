module BatchesHelper
  def batch_gradient_color(index)
    if index.even?
      'rgba(44, 62, 80, 0.92), rgba(44, 62, 80, 0.9)'
    else
      'rgba(57, 68, 89, 0.92), rgba(57, 68, 89, 0.9)'
    end
  end
end
