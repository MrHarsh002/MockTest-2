import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const checkupItems = [
	{
		id: 'CHK-001',
		title: 'Body System',
		episodes: 12,
		updatedAt: '2025-11-01T10:15:00Z',
		description:
			'A routine general health check including vitals, basic blood work.',
        icons: <FontAwesome5 name="lungs" size={24} color="black" />
	},

	{
		id: 'CHK-002',
		title: 'Medical Conditions',
		episodes: 3,
		updatedAt: '2025-10-20T08:30:00Z',
		description:
			'Assessment of heart health including ECG, echocardiogram',
        icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-003',
		title: 'Diabetes Management Program',
		episodes: 6,
		updatedAt: '2025-09-15T14:45:00Z',
		description:
			'Comprehensive diabetes management',
		icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},
	{
		id: 'CHK-004',
		title: 'Respiratory Screening',
		episodes: 2,
		updatedAt: '2025-11-05T12:00:00Z',
		description:
			'Pulmonary function tests and symptom review for patients with wheeze',
		icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-005',
		title: 'Women\'s Preventive Visit',
		episodes: 1,
		updatedAt: '2025-07-30T09:20:00Z',
		description:
			'Annual preventive visit including pelvic exam.',
		icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-006',
		title: 'Men\'s Health Screening',
		episodes: 1,
		updatedAt: '2025-06-12T11:10:00Z',
		description:
			'Focused screening for common male health concerns including prostate discussion.',
        icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-007',
		title: 'Orthopedic Assessment',
		episodes: 2,
		updatedAt: '2025-08-18T15:05:00Z',
		description:
			'Evaluation for joint pain or injury: physical exam.',
        icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-008',
		title: 'Mental Health Check-In',
		episodes: 4,
		updatedAt: '2025-10-02T07:50:00Z',
		description:
			'Screening and brief interventions for depression, anxiety, and stress.',
        icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-009',
		title: 'Pediatric Well Visit',
		episodes: 1,
		updatedAt: '2025-11-07T13:40:00Z',
		description:
			'Child growth and development check.',
        icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	},

	{
		id: 'CHK-010',
		title: 'Dermatology Spot Check',
		episodes: 1,
		updatedAt: '2025-05-22T16:25:00Z',
		description:
			'Skin exam focused on new or changing lesions.',
        icons: <FontAwesome5 name="notes-medical" size={24} color="black" />
	}
];

export default checkupItems;

