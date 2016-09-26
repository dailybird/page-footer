# page-footer demo
> you can use footer.js by this:

```
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body style="margin:0px;">

<div style="width: 100%; height: 100px; background-color: pink;"></div>
<div style="width: 100%; height: 100px; background-color: deepskyblue;" id="js-footer"></div>

<script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="footer.js"></script>
<script type="text/javascript">
	$('#js-footer').footer();
	$(window).resize(function(){
		$('#js-footer').footer();
	});
</script>
</body>
</html>
```
