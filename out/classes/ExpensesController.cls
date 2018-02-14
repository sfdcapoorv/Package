public with sharing class ExpensesController {

    
    @AuraEnabled
    public static Contact saveExpense1(Contact expensew) {
        // Perform isUpdatable() checking first, then
       system.debug('test');
        insert expensew;
        return expensew;
    }
    
      @AuraEnabled
    public static Contact saveExpense(Contact expense) {
        // Perform isUpdatable() checking first, then
		 system.debug('test');
        insert expense;
        return expense;
    }
}