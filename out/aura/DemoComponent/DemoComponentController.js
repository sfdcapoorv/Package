({
    clickCreateExpense: function(component, event, helper) {

        // Simplistic error checking
        var validExpense = true;

        // If we pass error checking, do some real work
        if(validExpense){
            // Create the new expense
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }
})