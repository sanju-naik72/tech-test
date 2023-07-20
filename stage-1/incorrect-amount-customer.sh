#!/bin/bash

touch incorrect-amount.txt

while IFS=, read -r name age address phone email; do
    if ((age >= 40 && age <= 59)); then
        echo "$name, $age, $address, $phone, $email" >> incorrect-amount.txt
    fi
done < latest-customers.txt