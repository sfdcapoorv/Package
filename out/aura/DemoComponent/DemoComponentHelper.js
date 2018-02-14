({
  createExpense: function(component, expense) {
    var action = component.get("c.saveExpense");
    action.setParams({
        "expense": expense
    });
    action.setCallback(this, function(response){
        var state = response.getState();
        
        if (component.isValid() && state === "SUCCESS") {
            
alert('created');
            var expenses = component.get("v.expenses");
            expenses.push(response.getReturnValue());
            component.set("v.expenses", expenses);
        }else if (component.getState() === "ERROR") {
            $A.log("Errors", component.getError());
            }
    });
    $A.enqueueAction(action);
}	
    
    
})