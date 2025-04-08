const data = [
	{
		_id: 1,
		name: "Abhinav",
		quantity: 1,
		gender:"male"
	},
	{
		_id: 2,
		name: "Ayushee",
		quantity: 1,
		gender:"female"
	},
	{
		_id: 3,
		name: "Hardy",
		quantity: 1,
		gender:"male"
	},
];

const value = data.filter((v, index)=>{
	return v.gender==="female"
})

console.log(value)
