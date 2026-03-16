/* Please, implement a function accountPatients that takes a count of beds in a hospital and returns an array
of two functions: the first one for adding a patient, the second one for discharging a patient

Initially there are no patients in the hospital.

accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged,
print the count to the console like in examples:

A patient was admitted, 34 beds are available
A patient was discharged, 54 beds are available

When there are no beds available,
Can not admit a patient, no beds available should be printed

When there is an attempt to discharge a patient when there are no patients,
There are no patients to discharge should be printed */

{
    const accountPatients = function (totalBeds) {
        let currentPatients = 0;

        function admit() {
            if (currentPatients < totalBeds) {
                currentPatients++;
                console.log(`A patient was admitted, ${totalBeds - currentPatients} beds are available`);
            } else {
                console.log('Can not admit a patient, no beds available');
            }
        }

        function discharge() {
            if (currentPatients > 0) {
                currentPatients--;
                console.log(`A patient was discharged, ${totalBeds - currentPatients} beds are available`);
            } else {
                console.log('There are no patients to discharge');
            }
        }

        return [admit, discharge];
    };

    const [admit, discharge] = accountPatients(3);
    admit();
    admit();
    admit();
    admit();
    discharge();
    discharge();
    discharge();
    discharge();
}