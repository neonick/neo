var paths = {


	// eji_lit1_floor1: { 
	// 	color: "#9FCFFF", 
	// 	floor: 1,
	// 	liter : 2,
	// 	path: "M741.726 696.565l-70.65 4.403-50.412 1.03-2.437-3.173-16.68-1.13-1.685-6.846-16.023.842-54.442-3.092-19.64-1.405-2.68-1.03V666.11l2.212.187 75.036 3.56 17.09-.937 16.418 1.31 2.07.142 68.04-.984 53.69-.842"},

	// eji_lit1_floor2: { 
	// 	color: "#9FCFFF", 
	// 	floor: 2,
	// 	liter : 2,
	// 	path: "M741.726 666.19l-70.276 1.694-49.85.38-3.373.2-16.68-1.13-17.427.935-74.024-3.375.187-4.124-.374-3.934-3.187-.188-.375-22.864 3.373.188 37.482.375 15.554.375 10.87.75 26.048 1.124 5.34.375 10.964.937 3.936 2.093 68.027-1h54.254"},

	eji_lit1_floor3: { 
		color: "#fff", 
		floor: 3,
		liter : 2,
		path: "M741.506 626.523l9.572 2.81v7.31l-130.85.843-5.077-2.108-14.343-.844-39.85-1.686-14.444-.422-45.523.14-1.537-2.95.496-20.848 1.804.04 35.795-1.2 4.216-.164 8.668-.036 1.734 1.405 6.465.132 41.604.813 9.065.242h8.222l2.952.463 67.535-.335 53.98-.23"},

	eji_lit1_floor5: { 
		color: "#fff", 
		floor: 5,
		liter : 2,
		path: "M742.264 582.685l-54.182.3-.035.157-22.137.087-.21.084-44.012.037-4.365-.54-.033-.166-7.792-.08-8.918.053-42.51-.437.07-.137-6.887-.068-9.252.015-4.31.086-35.09.03-2.624-.2-.023-21.622 1.804.017 35.793-.03 4.217-.072 8.89-.016 8.42.032v.146l41.593.128 8.978-.14L687.94 560h54.254"},

	eji_lit1_floor4: { 
		color: "#fff", 
		floor: 4,
		liter : 2,
		path: "M742.264 608.937l-54.182.203-.035.11-22.137.064-.21.076-44.012.03-4.365-.58-.033-.177-7.792-.085-9.2.055-42.79-.466-4.778-.338-.984-1.547-9.276-.28-4.287.28-35.665.14-2.372-.39-.264-22.033h1.828l35.84.646 4.217-.132 8.667.173 7.918-.466.28.704 42.026-.285 8.878.44 7.707-.02 2.67.673 68.028-.733h54.254"},

	eji_lit1_floor6: { 
		color: "#fff", 
		floor: 6,
		liter : 2,
		path: "M742.264 535.147l-54.182-.136-.035-.075-22.137-.046-.21-.066-44.012-.027-4.365.56-7.825.252-8.918-.053-42.51.447.07.14-6.887.07-9.252-.016-4.31-.087-35.09-.03-2.624.204-.023 22.107 1.804-.016 35.793.033 4.217.072 8.89.016 8.42-.033v-.15l41.593-.13 8.978-.08 7.964-.103h124.583"},

	eji_lit1_floor7: { 
		color: "#fff", 
		floor: 7,
		liter : 2,
		path: "M742.264 508.5l-54.182-.207-.035-.132-22.137-.093-.21-.19-44.012-.074-4.365 1.895-.033.58-7.792.28-8.918-.175-42.51 1.51.07.472-6.887.236-9.252-.053-4.31-.295-35.09-.106-2.624.69-.023 21.485 1.804-.057 35.793.11 4.217.244 8.89.055 8.42-.11v-.504l41.593-.44 8.978-.07 7.99-.14.06-1.232 70.243-.176h54.254"},

	eji_lit1_floor8: { 
		color: "#fff", 
		floor: 8,
		liter : 2,
		path: "M742.264 483.898l-54.182-.247-.035-.157-22.137-.112-.21-.225-44.012-.09-4.365 2.264-.033.693-7.792.333-8.918-.21-42.51 1.805.07.564-6.887.283-9.252-.064-4.31-.353-35.09-.127-2.624.826.094 22.05 1.687-.49 35.793.13 4.217.294 8.89.065 8.42-.13v-.604l41.71-1.548 8.86.326 7.992-.293.06-1.79 3.824-1.142 44.43-.01.03.18 21.96.135.068.27 54.183.11"},

	eji_lit1_floor9: { 
		color: "#fff", 
		floor: 9,
		liter : 2,
		path: "M742.264 458.275l-54.182-.318-.035-.203-22.137-.144-.21-.29-44.012-.116-4.365 2.91-.033.894-7.792.428-8.918-.268-42.51 2.32.07.724-6.887.364-9.252-.083-4.31-.453-35.09-.164-2.624 1.063.094 22.577 1.687-.63 35.793.17 4.217.376 8.89.084 8.42-.168v-.776l41.71-1.992 8.86.42 7.992-.378.06-2.305 3.824-1.468 44.43-.014.03.232 21.96.173.068.348 54.183.142"},

	eji_lit1_floor10: { 
		color: "#fff", 
		floor: 10,
		liter : 2,
		path: "M742.264 433.366l-54.182-.323-.035-.206-22.137-.146-.21-.293-44.012-.117-4.365 2.952-.033.906-7.792.434-8.918-.272-42.456 2.352.015.735-6.887.37-9.252-.085-4.31-.46-35.09-.166-2.624 1.078.094 21.765 1.687-.638 35.793.17 4.217.382 8.89.085 8.42-.17v-.787l41.71-2.02 8.86.426 7.992-.384.06-2.338 3.824-2.084 44.43.28.03.537 21.96.177.068.352 54.183.142"},

	eji_lit1_floor11: { 
		color: "#fff", 
		floor: 11,
		liter : 2,
		path: "M742.264 407.772l-54.182-.402-.035-.257-22.407-.182.06-.366-44.012-.146-4.365 3.68-.033 1.13-7.792.54-8.918-.338-42.51 2.933.07.916-6.887.46-9.252-.106-4.31-.573-35.887-.206-1.827.98.094 22.02 1.687-.794 35.793.212 4.217.477 8.89.105 8.42-.212v-.98l41.71-2.518 8.86.53 7.992-.477.06-2.434 3.824-2.336 44.43-.017.03.294 21.96.22.068.438 54.183.18"},

	eji_lit1_floor12: { 
		color: "#fff", 
		floor: 12,
		liter : 2,
		path: "M742.264 382.22l-54.182-.494-.035-.315-22.137-.224-.21-.45-44.012-.18-4.365 4.525-.033 1.39-7.792.665-8.918-.416-42.51 3.605.07 1.127-6.887.565-9.252-.13-4.31-.703-35.09-.255-2.624 1.65.094 21.1 1.687-.977 35.793.26 4.217.587 8.89.13 8.42-.26v-1.206l41.71-3.096 8.86.652 7.992-.587.06-2.858 3.824-3.007 44.43-.02.03.36 21.96.27.068.54 54.183.22"},

	eji_lit1_floor13: { 
		color: "#fff", 
		floor: 13,
		liter : 2,
		path: "M742.264 356.653l-54.182-.582-.035-.37-22.137-.264-.21-.53-44.012-.21-4.365 5.322-.033 1.634-7.792.782-8.918-.49-42.583 4.552.142 1.016-6.887.665-9.252-.152-4.31-.828-35.09-.3-2.624 1.943.094 20.853 1.687-1.15 35.793.306 4.217.69 8.667.153 8.2-.307.14-1.03 41.79-4.03 8.972.767 8.047-.69.088-4.217 3.84-2.683 44.436-.024.035.422 21.96.318.072.635 54.182.258"},

	eji_lit1_floor14: { 
		color: "#fff", 
		floor: 14,
		liter : 2,
		path: "M742.264 330.102l-54.182-.71-.035-.454-22.137-.323-.21-.65-44.012-.256-4.365 6.505-.033 1.997-7.792.956-8.918-.6-42.583 5.565.142 1.24-6.887.814L542 344l-4.31-1.01-35.09-.368-2.624 2.375.094 21.364 1.687-1.405 35.793.375 4.217.843 8.89.188 8.42-.374v-1.733l41.71-4.45 8.86.936 7.992-.844.06-5.154 3.824-3.28 44.43-.03.03.518 21.96.388.068.777 54.183.315"},

	eji_lit1_floor15: { 
		color: "#fff", 
		floor: 15,
		liter : 2,
		path: "M742.264 305.572l-54.182-.773-.035-.493-22.137-.35-.21-.706-44.012-.278-4.365 7.068-.033 2.17-7.792 1.04-8.918-.652-42.583 6.044.142 1.35-6.887.883-9.252-.202-4.31-1.1-35.09-.4-2.577 3.755-.21 20.078 2.248-2.293 35.912.186 4.146.866 9.347.496 6.887-.744.21-1.51 42.096-5.2 9.242.983 6.078-1.1.094-2.717 5.107-6.442 44.765.774.035.562 21.96.422.07.843 54.29.633"},

	eji_lit1_floor16: { 
		color: "#fff", 
		floor: 16,
		liter : 2,
		path: "M742.264 280.756l-54.182-.747-.035-.39-22.137-.18-.21-2.03-44.012-.3-4.365 7.557-.033 2.32-7.792 1.11-8.918-.696-42.583 6.463.142 1.442-6.887.944-9.252-.216-4.31-1.177-35.09-.425-2.577 4.012-.21 22.167 2.248-3.153 35.912.2 4.146.926 9.347.53 6.887-.795.21-2.45 42.096-5.434 9.23.398 7.19-.795v-4.158l4.09-5.42 44.77.448.04.978 21.962.105.07.843 54.29.664"},

	eji_lit1_floor17: { 
		color: "#fff", 
		floor: 17,
		liter : 2,
		path: "M742.264 255.115l-54.182-.792-.035-.412-22.137-.19-.21-2.154-44.012-.317-4.365 8.013-.033 2.46-7.792 1.18-8.918-.74-42.583 6.855.142 1.53-6.887 1-9.252-.227-4.31-1.247-35.09-.45-2.577 4.255-.21 21.574 2.248-2.6 35.912.21 4.146.985 9.347.562 6.887-.844.21-2.6 42.096-5.763 9.23.422 7.19-.844v-4.41l4.09-5.746 44.77.474.04 1.038 21.962.11.07.895 54.29.705"},

	eji_lit1_floor18: { 
		color: "#fff", 
		floor: 18,
		liter : 2,
		path: "M742.264 229.674l-54.182-.878-.035-.457-22.137-.212-.21-2.39-44.012-.35-4.365 8.885-.033 2.728-7.792 1.307-8.918-.82-42.583 7.6.142 1.696-6.887 1.11-9.252-.252-4.31-1.383-35.09-.5-2.577 4.508-.21 22.44 2.248-4.208 35.912.11 4.146 1.393h9.277l6.957-.517.07-2.042 42.517-6.807 8.947.92 7.19-.948v-5.202l4.09-6.372 44.77.527.04 2.397 21.963.124.07.99 54.29.78"},

	eji_lit1_floor19: { 
		color: "#fff", 
		floor: 19,
		liter : 2,
		path: "M741.913 204.913l-76.18-1.31.188-3.656-44.232-.42-4.365 9.77-.033 3-7.792 1.437-8.918-.9-42.583 8.358.142 1.865-6.887 1.22L542 224l-4.31-1.522-35.09-.55-2.577 4.654-.21 22.512 2.248-4.63 35.912.56 4.146 1.976h9.277l6.957-1.01.07-2.467 42.517-7.598 8.947.96 7.19-1.1v-5.722l4.09-7.008 44.77.58.04 2.635 21.963.136.07 1.09 54.29.35"},

	eji_lit1_floor20: { 
		color: "#f8ff7f", 
		floor: "20-21",
		liter : 2,
		path: "M740.078 177.88l-74.49-1.264-.137-2.39-43.71-.562-4.392 10.682-.045 3.28-7.8 1.57-8.92-.985L558 197.348l.142 2.038-6.886 1.335-9.253-.304-4.31-1.663-35.09-.602-2.577 7.49-.21 19.747 2.248-5.06 35.912.064 4.146 1.61h9.277l6.957-.555.07-2.42 42.517-8.17 8.947 1.117 7.19-1.132v-6.255l4.09-7.66 44.77.633.04 2.88 20.838.353.095 2.062 55.073 1.17.35 12.018 10.12-13.914.173-9.558-12.548-.492 M739.524 153.776l-73.696-2.46-.094-1.968-44.227-.937-4.31 9.277-.187 4.31-7.59 1.312-8.34-.47-42.914 9.09.187 2.435-7.965 1.78-8.62.75-4.405-1.968-35.888-.562-1.593 9.84.187 18.645 2.06-6.372 35.232.187 4.755 1.874s8.456.28 8.83.187c.376-.094 7.403-1.406 7.403-1.406l-.28-1.123 42.633-9.557 8.842 1.03 7.53-1.123v-6.465l4.238-8.738 44.763.843v2.53l73.787 1.523-.34-22.464z"},



	// eji_lit2_floor1: { 
	// 	color: "#9FCFFF", 
	// 	floor: 1,
	// 	liter : 1,
	// 	path: "M804.787 697.932l-.094-26.48 24.362 6.232 9.248-.28 46.775 1.404v3.936L995.188 689h23.753l115.535-.81 1.122 38.125-139.426-1.335-16.373-6.993-64.724-5.604-13.915.71-19.536-1.4-43.43.143-33.452-10.54"},

	// eji_lit2_floor2: { 
	// 	color: "#9FCFFF", 
	// 	floor: 2,
	// 	liter : 1,
	// 	path: "M804.787 668.698l-.094-26.48 11.994 2.81 10.12 2.062 54.534.188 22.3.562 75.9 2.998 15.93 3.186 55.095.562 24.925.375 59.22-.56.374 32.794-63.904.75-75.524.937-73.836-4.122-36.92-2.06-.186-5.998-47.038-1.687-8.808.375"},

	eji_lit2_floor3: { 
		color: "#fff", 
		floor: 3,
		liter : 1,
		path: "M804.787 630.505l-.094-13.96 11.994 1.498 10.12.187 43.29.188 12.743.187 15.367-.187 84.146.323 16.114 1.26h53.41l23.238.146 63.155.916.187 30.396-63.717 1.002-76.085.595-19.49-3.545-18.46-.648-2.53-.09-60.062-2.246-.937-.187-16.023-.592-10.12.252h-11.9l-31.39.123-37.293-8.816-.093-6.212"},

	eji_lit2_floor4: { 
		color: "#fff", 
		floor: 4,
		liter : 1,
		path: "M804.88 613.732l-.187-27.548 11.994 1.5 10.12.187 43.29.188 12.743.188 15.367-.188 84.146.844 15.927.937 53.597.842 23.238-.375 63.155.656.41 27.966-63.565-.606.012.75-76.5.68-14.55-1.618v-.374l-18.832-.03-7.237.155-60.043-.724.145-.21-15.588-.165-8.567.045-3.65.14-42.165.06-11.735-.764-.14-.64"},

	eji_lit2_floor5: { 
		color: "#fff", 
		floor: 5,
		liter : 1,
		path: "M804.88 583.86l-.14-22.834 93.607.42 240.5.563-.166 25.63-63.488.1-.065.178-76.513-.023-10.454-.774-5.556-.342-17.145-.13-7.345.152-60.096-.708.116-.207-15.6-.16-8.574.044-3.655.137-42.165.058-11.736-.75.35-.555"},

	eji_lit2_floor6: { 
		color: "#fff", 
		floor: 6,
		liter : 1,
		path: "M804.078 533.593v25.184l93.728.983 240.84.703-.065-31.515-63.438-.123-.04-.22-76.5.028-16.08.813.08.56-17.145.16-7.342-.187-60.097.87.118.254-15.6.197-8.575-.053-3.653-.17-42.33-.07-11.9.92v.684"},

	eji_lit2_floor7: { 
		color: "#fff", 
		floor: 7,
		liter : 1,
		path: "M804.078 510.195v21.244l11.997-1.336.41-.622 11.797-.482h42.447l3.302-.432 8.896.452 15.15-.322v.07l59.588-.632 8.044.07 17.304-1.054.078-.773 14.29-.774 76.696.14v.142l64 .14V498.02l-63.188-.322.086-.577-76.438.075-16.046 2.13.093 1.468-17.136.423-7.34-.492-60.094 2.28.12.668-15.6.515-8.575-.14-3.653-.445-42.33-.188-11.9 2.412v1.793"},

	eji_lit2_floor8: { 
		color: "#fff", 
		floor: 8,
		liter : 1,
		path: "M804.46 482.42l-.072 25.22 11.877-3.03.047-1.75 11.83-2.06 42.025.21 3.654.503 9.143.394 15.115-.476v-.856l59.87-2.094 7.586.015 17.375-.58.393-1.535 15.4-2.38h76.53l.028.502 63.867.46-.305-28.446-63.56-.272-.1-.67-76.53.13-16.094 2.75.07 1.894-17.147.546-7.343-.63-60.098 2.93.117.856-15.602.66-8.573-.18-3.655-.57-42.165-.24-11.736 3.095.14 2.3"},

	eji_lit2_floor9: { 
		color: "#fff", 
		floor: 9,
		liter : 1,
		path: "M804.46 454.79l-.072 26.285 11.877-3.49.047-2.015 11.97-3.22 41.674.103 3.865.27 9.067.454 15.18-.828-.14-.708 60.014-2.948 7.556.553 17.394-.67-.164-1.675 15.94-2.828 76.502-.244.09 1.13 63.868.374-.305-28.958-63.558-.353-.1-.792-76.53.142-16.094 3.162.07 2.18-17.147.627-7.343-.724-60.098 3.372.117.987-15.602.762-8.573-.208-3.655-.658-42.165-.277-11.736 3.565.14 2.82"},

	eji_lit2_floor10: { 
		color: "#fff", 
		floor: 10,
		liter : 1,
		path: "M804.46 428.77l-.072 23.82 10.12-3.585-.14-2.39 13.914-4.084 41.674.12 3.865.312 9.067.524 15.18-.955-.14-.814 60.014-3.398 7.556.637 16.27-.772.21-1.827 16.69-3.365 76.502-.28.09 1.304 63.868.43-.305-28.197-63.558-.407-.103-1.33-76.413.08-14.71 3.582-.164 2.793-18.412 1.006-7.343-.835-60.098 3.887.117 1.138-15.602.878-8.573-.24-3.655-.757-42.165-.32-11.736 4.11.14 4.55"},

	eji_lit2_floor11: { 
		color: "#fff", 
		floor: 11,
		liter : 1,
		path: "M804.46 403.09l.046 23.85 12.087-4.355.05-3.826 11.64-4.675 41.673.142 3.865.823 9.067.168 15.18-1.133-.14-.968 60.014-4.032 7.732.756 18.13-.962.095-2.59 14.945-3.524 76.414-.334.046 1.548 63.846.51-.316-28.125-63.565-.483-.246-2.023-76.272-.187-14.71 4.978-.165 3.314-18.412 1.194-7.343-.992-60.098 4.613.117 1.35-15.602 1.042-8.573-.285-3.655-.9-42.165-.378-11.736 4.877.14 5.398"},

	eji_lit2_floor12: { 
		color: "#fff", 
		floor: 12,
		liter : 1,
		path: "M804.46 379.044l.046 22.783 12.087-5.442.05-4.782 11.64-5.844 41.673.177 3.865 1.03 9.143.407 15.115-1.195v-1.63l59.94-5.04 7.692.945 18.112-1.655.084-2.788 14.94-4.404 76.412-.417.046 1.936 63.845.637-.318-28.128-63.565-.604-.105-1.973-76.414-1.2-14.71 6.634-.235 3.746-18.342 1.89-7.343-1.24-60.098 5.766.117 1.688-15.602 1.302-8.573-.355-3.655-1.124-42.165-.474-11.736 6.096.14 6.747"},

	eji_lit2_floor13: { 
		color: "#fff", 
		floor: 13,
		liter : 1,
		path: "M804.46 351.35l.046 23.866 12.087-5.997.05-5.27 11.64-6.44 41.673.196 3.865 1.134 9.067.23 15.18-1.56-.14-1.332 60.014-5.554 7.732 1.04 17.99-1.888.235-4.026 14.945-6.47 76.414.938.046 2.132 63.846.753-.316-28.567-63.565-.665-.105-2.174-76.414-1.322-14.71 7.31-.14 3.7-18.437 2.508-7.343-1.366-60.098 6.354.117 1.86-15.602 1.435-8.573-.39-3.655-1.24-42.165-.522-11.736 6.717.14 7.435"},

	eji_lit2_floor14: { 
		color: "#fff", 
		floor: 14,
		liter : 1,
		path: "M804.46 323l.07 25.932 12.016-6.696.097-6.957 11.64-6.94 41.673.21 3.865 1.223 9.073.25 15.185-1.683v-1.193l59.87-6.227 7.727 1.122 18.176-2.485.048-3.89 14.99-7.307 76.368 1.218.047 2.427 63.845.81-.316-29.482-63.565-.716-.105-2.344-76.882-.843-15.178 7.76-.142 3.765-17.5 2.46-7.343-1.473-59.91 7.436-.07 2.4-15.742 1.545-8.574-.42-3.864-1.337-42.166-.21-10.963 7.097-.28 6.79"},

	eji_lit2_floor15: { 
		color: "#fff", 
		floor: 15,
		liter : 1,
		path: "M804.373 299.215l.113 23.106 12.04-7.548.106-7.842 11.645-7.822 41.676.238 3.867 1.377 9.066.28 15.18-1.895-.14-1.618 60.015-6.746 7.732 1.265 17.335-2.672-.188-4.076 15.25-8.222 77.162 1.476.07 2.178 63.846.914-.316-28.164-63.565-.808-.246-2.364-77.02-.99-14.898 8.51-.072 4.982-17.5 2.93-7.478-2.555-59.974 8.38v2.55l-15.502 1.665-8.664-.297-3.63-1.487-41.957-.356-11.247 8.546v7.895"},

	eji_lit2_floor16: { 
		color: "#fff", 
		floor: 16,
		liter : 1,
		path: "M804.373 271.383l.113 24.796 12.04-8.102.106-8.416 11.645-8.394 41.676.255 3.867 1.404 9.066.128 15.18-1.787-.07-2.425 60.016-8.04 7.52 1.913 17.428-2.425-.07-4.85 14.828-8.168 77.022.66.246 2.212 63.987.894-.14-28.773-63.566-.867-.246-2.537-77.02-1.063-14.898 9.134-.282 5.446-17.29 3.045-7.478-2.74-59.974 8.994v2.736l-15.502 1.787-8.664-.32-3.63-1.595-41.957-.383-11.247 9.17v8.472"},

	eji_lit2_floor17: { 
		color: "#fff", 
		floor: 17,
		liter : 1,
		path: "M804.373 246.446l.113 23.59 12.04-8.92.106-9.268 11.645-9.243 41.676.28 3.867 1.547 9.066.14 15.18-1.967-.07-2.67 60.016-8.855 7.52 2.108 17.428-2.67-.07-5.342 14.828-8.995 77.022.727.246 2.437 63.987.983-.14-27.97-63.566-.954-.246-2.794-77.02-1.172-14.898 10.058-.282 5.996-17.29 3.353-7.478-3.02-59.974 9.906v3.013l-15.502 1.968-8.664-.35-3.63-1.757-41.957-.422-11.247 10.1v9.33"},

	eji_lit2_floor18: { 
		color: "#fff", 
		floor: 18,
		liter : 1,
		path: "M804.373 219.835l.113 25.09 12.04-9.488.106-9.857 11.517-10.804 41.81.35 3.933 1.688 8.925.14 15.178-2.32.21-2.356 59.91-9.67 7.257 2.538 17.508-2.88.075-6.465 14.97-10.06 53.272 1.098 23.824.412.142 2.633 63.88.96-.778-28.423-64.186-1.64v-2.25l-76.636-1.45-14.62 10.696-.142 6.377-17.218 3.565-7.345-3.21-59.857 10.534-.273 3.837-15.245 2.057-8.853-.167-3.584-1.613-41.9-.805-11.328 10.036v9.922"},

	eji_lit2_floor19: { 
		color: "#fff", 
		floor: 19,
		liter : 1,
		path: "M804.6 192.498l.07 25.72 12.017-11.243-.07-11.174 11.103-9.557 42.587.844 3.514 1.194 8.996-.28 15.39-2.038.07-3.795 59.876-9.908 7.01 2.6 16.916-2.883v-6.535l15.62-10.47 53.385 1.123 23.88.422.17 1.546 63.895.984-.326-27.338-64.624-.914v-2.81l-23.036-.353-.098-1.405-52.966-.633-14.888 10.963-.276 6.536-17.285 3.654-7.31-2.46-59.944 10.542-.28 3.357-15.25 2.11-8.855-.172-3.583-1.653-42.165-.456-11.315 9.917-.158 11.705"},

	eji_lit2_floor20: { 
		color: "#f8ff7f", 
		floor: "20-21",
		liter : 1,
		path: "M808.51 161.535l-.074 6.274-14.238 15.552.188 9.65 8.433.282 13.422-14.712.137-11.184 11.69-10.88 42.448.89L873.47 159h9.276l15.32-2.366.14-3.572 60.017-10.782 7.45 2.41 17.427-3.504-.14-7.022 15.18-11.663 52.987.986.036 3.444 23.2.698.002 3.372h8.996l55.847.648-.373 6.648 14.244-9.093V117.76l-18.508-.422-.03-16.058-83.415-1.687-.104-4.216-52.83-.984-15.31 13.212-.065 6.816-17.145 3.304-7.45-3.303-60.014 11.597-.21 2.67-15.25 2.6-8.855-.21-3.583-2.038-42.165-.563-11.315 12.228-.21 11.595M808.55 133.982l-.324 25.955 8.025-8.527.134-11.435 11.544-12.998 42.45.656 3.278 1.763 8.996.372 15.273-2.25-.094-3.187 60.626-11.712 6.188 2.623 17.433-2.81v-7.496l15.316-12.18 53.9.725.127 5.2 83.692.913-.25-28.673-84.033-2.53-.274-3.654s-50.595-1.687-51.72-1.124c-1.123.562-15.458 14.336-15.458 14.336l.282 4.78-18.552 4.216-6.746-2.25-60.718 12.932.28 2.25-14.616 3.934-9.557.28-3.653-1.967-41.846-1.406-13.172 14.055v10.213l-6.528 8.997z"},

}
