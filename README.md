# Angular-CustomPopover
Angular wrapper to Bootstrap popover

<p>
In this implementation, I have tried to extend the existing Bootstrap popover by introducing an external HTML 
template file instead of the parameterized values. <br>
The external template file will definitely add extensibility and user has the control over it's contents.
</p>
<p>
There are two ways of defining the external template file
<ol>
  <li>Using inline template: the HTML template will be defined inside the same HTML file seperating its contents using 
  <code>script</code> tag.</li>
  <li>As an external template file: In this scenario, the template will be read using an AJAX call and aded to 
  <code>$templateCache</code> before the usage</li>
</ol>
</p>
