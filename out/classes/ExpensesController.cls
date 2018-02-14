public with sharing class ExpensesController {

    
    @AuraEnabled
    public static Contact saveExpense(Contact expense) {
        // Perform isUpdatable() checking first, then
       system.debug('test');
        insert expense;
        return expense;
    }
    
      @AuraEnabled
    public static Contact saveExpense1(Contact expense) {
        // Perform isUpdatable() checking first, then
        insert expense;
        return expense;
    }
}