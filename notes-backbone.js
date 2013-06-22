//




obj.set('someAttribute', 'someValue')
obj.set
obj.get
obj.attributes['someAttribute'] = 'someValue'

//shouting in a room so that others can hear you.
//all that apply will respond as designed.

//jq is manually updating every one for specific name,
//then asking them to perform the task.




obj2.get('someOtherAttribute')
obj.on('change:someAttribute',function(){
  obj2.set('someOtherAttribute', obj.get('someAttribute'))
})