//complete this code
class Rectangle {
	def __init__(self, width, height):
        self._width = width
        self._height = height
    
    def getWidth(self):
        return self._width
    
    def getHeight(self):
        return self._height
    
    def getArea(self):
        return self._width * self._height
  }
}

class Square(Rectangle) {
	def __init__(self, side):
        super().__init__(side, side)
    
    def getPerimeter(self):
        return 4 * self._width
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
