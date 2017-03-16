$(document).ready(function(){



}

function totalsTable(){
  var breakfast = $('#breakfast-table .total').innerHTML();
  var lunch     = $('#lunches-table .total').html();
  var dinner    = $('#dinners-table .total').html();
  var snacks    = $('#snacks-table .total').html();
  var total     = parseInt(breakfast) + parseInt(lunch) + parseInt(dinner) + parseInt(snacks);
  $('#totals-table .consumed').html(total);
  remainingTotal();
}

function remainingTotal(){
  var today = parseInt($('#totals-table .goal').html()) - parseInt($('#totals-table .consumed').html())
  if(today < 0){
    $('#totals-table .remaining').html(today).css('color', 'red');
  } else if(today > 0){
    $('#totals-table .remaining').html(today).css('color', 'green');
  };
}
