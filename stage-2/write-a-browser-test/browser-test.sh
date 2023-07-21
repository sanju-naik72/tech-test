#!/bin/bash

# The integer table data
data="1 2 3 4 5 6 7 8 9
23 50 63 90 10 30 155 23 18
133 60 23 92 6 7 168 16 19
30 43 29 10 50 40 99 51 12"

# Read the data into an array of rows
readarray -t rows <<< "$data"

# Function to find the center index
find_center_index() {
  local num_rows=${#rows[@]}

  for ((i = 1; i < num_rows; i++)); do
    local left_sum=0
    local right_sum=0

    # Split each row into an array of integers
    IFS=" " read -r -a row <<< "${rows[i]}"

    # Calculate the total sum of the entire row
    for val in "${row[@]}"; do
      left_sum=$((left_sum + val))
    done

    # Find the center index
    for ((j = 0; j < ${#row[@]}; j++)); do
      # Add the current element to the right_sum
      right_sum=$((right_sum + row[j]))

      # Check if the center is found
      if [ "$left_sum" -eq "$right_sum" ]; then
        echo "$i"
        return
      fi

      # Subtract the current element from the left_sum
      left_sum=$((left_sum - row[j]))
    done
  done

  echo "null"
}

center_index=$(find_center_index)

if [ "$center_index" != "null" ]; then
  # Extract the center value from the data
  center_value=$(echo "${rows[$center_index]}")
  echo "Index $center_index (with the value of $center_value) is the center to return."
else
  echo "There is no center index."
fi
