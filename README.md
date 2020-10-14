# hasc
Simple NodeJS module for working with country HASC codes.

```javascript
const hasc = new HASC('US.DC');
hasc.code
> 'US.DC'
hasc.level
> 1
hasc.within('US')
> true
hasc.contains('US.DC.DI')
> true
```