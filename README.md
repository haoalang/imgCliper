# imgCliper
imgCliper for html
<ol>
	<li>
	<h3><a href="#part1"><span style="font-size:14px"><strong>imgClipper</strong></span><strong>用途</strong></a></h3>
	</li>
	<li>
	<h3><a href="#part2"><span style="font-size:14px"><strong>imgClipper</strong></span><strong>使用要求</strong></a></h3>
	</li>
	<li>
	<h3><a href="#part3"><span style="font-size:14px"><strong>imgClipper</strong></span><strong>使用方法</strong></a></h3>
	</li>
	<li>
	<h3><a href="#part4"><span style="font-size:14px"><strong>imgClipper的函数</strong></span></a></h3>
	</li>
	<li>
	<h3><a href="#part5"><strong>写在最后</strong></a></h3>
	</li>
</ol>

<p>&nbsp;</p>

<hr />
<p><a id="part1" name="part1"><span style="font-size:16px">1.imgClipper用途</span></a></p>

<p><span style="font-size:14px">&nbsp; &nbsp; imgCliper用于在浏览器前端裁剪图片。</span></p>

<p>&nbsp;</p>

<hr />
<p><a id="part2" name="part2"><span style="font-size:16px">2.imgClipper使用要求</span></a></p>

<p><span style="font-size:14px">&nbsp;&nbsp; &nbsp;由于imgCliper是，使用FileReader读取input文件，使用的canvas做裁剪操作，使用了jquery做选择，JqueryUI的滑块部件，所以必须保证浏览器支持FileReader和canvas，并且代码已经引入了jquery和jqueryUI。</span></p>

<p>&nbsp;</p>

<hr />
<p><a id="part3" name="part3"><span style="font-size:16px">3.imgClipper使用方法</span></a></p>

<p><span style="font-size:14px">&nbsp; &nbsp; 首先在相应页面中引入imgClipper.css和imgClipper.js。</span></p>

<p><span style="font-size:14px">&nbsp;&nbsp; &nbsp;然后建立一个</span>ImgClip对象并将其初始化，比如：</p>

<blockquote>
<pre>
var imgClip1 = new ImgClip(document.getElementById(&#39;ipt-pic&#39;),200,280);//新建对象
imgClip1.ImgClipInit(document.getElementsByClassName(&#39;ImgClip-show-box&#39;)[0]);//初始化
</pre>
</blockquote>

<p>&nbsp; &nbsp; 之后你的页面将生成一个裁剪区域，完成裁剪后，访问对象的afterDeal属性获取裁剪后的结果，你将会得到似&ldquo;data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6Qd&rdquo;的base64编码字符串。</p>

<p>&nbsp;</p>

<hr />
<p><a id="part4" name="part4"><span style="font-size:16px">4.imgClipper的函数</span></a></p>

<p>&nbsp;</p>

<ul>
	<li>ImgClip(originImg,clip_W,clip_H) &nbsp;用于建立对象</li>
</ul>

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%">
	<thead>
		<tr>
			<th scope="col">参数</th>
			<th scope="col">作用</th>
			<th scope="col">必要</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>originImg</td>
			<td>一个file input控件元素</td>
			<td>&radic;</td>
		</tr>
		<tr>
			<td>clip_W</td>
			<td>裁剪宽度（默认200px）</td>
			<td>&times;</td>
		</tr>
		<tr>
			<td>clip_H</td>
			<td>裁剪高度（默认280px）</td>
			<td>&times;</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<ul>
	<li>ImgClipInit(show_box,btnText)</li>
</ul>

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%">
	<thead>
		<tr>
			<th scope="col">参数</th>
			<th scope="col">作用</th>
			<th scope="col">必要</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>show_box</td>
			<td>用于容纳imgClipper生成的裁剪区域的容器</td>
			<td>&radic;</td>
		</tr>
		<tr>
			<td>btnText</td>
			<td>选择按钮的文字（默认为&quot;选择一张图片&quot;）</td>
			<td>&times;</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<ul>
	<li>
	<p>imgDealer()</p>
	</li>
</ul>

<p>没有参数，此函数用于处理图片，处理完成后返回base64编码字符串，和直接访问afterDeal属性一样。</p>

<p>&nbsp;</p>

<hr />
<p><a id="part5" name="part5"><span style="font-size:16px">5.写在最后</span></a></p>

<p><span style="font-size:14px">这是一个简单的插件，勿笑 = =。</span></p>

<p><span style="font-size:14px">第一次发布自己的代码，第一次使用github。</span></p>

<p>代码简陋，有能看到的希望多多交流指正。_(:з」∠)_</p>
