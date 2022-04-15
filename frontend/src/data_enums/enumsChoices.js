
const ActivityType = [
    {label: "Sedentary", value: "sedentary"},
    {label: "Light", value: "light"},
    {label: "Active", value: "active"},
    {label: "Moderate", value: "moderate"},
    {label: "Very Active", value: "very_active"},
]
const DietStyle = [
    {label: "Heavy bulking", value: "heavy_bulking"},
    {label: "Bulking", value: "bulking"},
    {label: "Mild bulking", value: "mild_bulking"},
    {label: "Maintain weight", value: "maintain_weight"},
    {label: "Mild weight loss", value: "mild_weight_loss"},
    {label: "Weight loss", value: "weight_loss"},
    {label: "Extreme weight loss", value: "extreme_weight_loss"},
]
const Gender = [
    {label: "Male", value: "male"},
    {label: "Female", value: "female"},
]
const BodyType = [
    {label: "Ectomorph", value: "ectomorph"},
    {label: "Mesomorph", value: "mesomorph"},
    {label: "Endomorph", value: "endomorph"},
]


const enumArray = [
    ActivityType,
    DietStyle,
    Gender,
    BodyType
]

export default enumArray;
