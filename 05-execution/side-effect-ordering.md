# Side-Effect Ordering

Execution logic for side-effect ordering should be explicit. Skills should not keep acting after success and should not repeat state-changing operations without checking current state.
