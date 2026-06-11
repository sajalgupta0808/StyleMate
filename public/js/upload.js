async function uploadImage(){

const image =
document.getElementById(
'image'
).files[0];

const formData =
new FormData();

formData.append(
'image',
image
);

document.getElementById(
'result'
).innerHTML = `
<div class="spinner"></div>
<p>Analyzing Clothing...</p>
`;

const response =
await fetch(
'/api/clothes/upload',
{
method:'POST',
body:formData
}
);

const result =
await response.json();

document.getElementById(
'result'
).innerHTML = `
<div class="card">
<div class="card-body">

<h2>
AI Analysis
</h2>

<p>
Category:
${result.data.category}
</p>

<p>
Color:
${result.data.primary_color}
</p>

<p>
Fit:
${result.data.fit}
</p>

</div>
</div>
`;
}