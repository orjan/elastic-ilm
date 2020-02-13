Elastic ILM
===========

Creates lifecycle polices, mappings and write alias in order to work,
with rolling indices in a controlled manor.


Role Variables
--------------

```
template_mappings:
  my-index: shortlived-few-docs-rollover
lifecycle_polices:
  - shortlived-few-docs-rollover
```
