function Pizza(topping1, topping2, topping3, size){
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}

Pizza.prototype.price = function(){
  return (this.topping1 + this.topping2 + this.topping3 + this.size).toFixed(2);
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var topping1 = parseFloat($("#topping1").val());
    var topping2 = parseFloat($("#topping2").val());
    var topping3 = parseFloat($("#topping3").val());
    var size = parseInt($("input:radio[name=size]:checked").val());
    var order = new Pizza(topping1, topping2, topping3, size);
    console.log(topping1);
    console.log(topping2);
    console.log(topping3);
    console.log(order);
    $("#price").text(order.price());
    $(".output").show();
  });
});
