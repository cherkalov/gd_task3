import React from "react";
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './App.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24,36],
  iconAnchor: [12,36]
});
L.Marker.prototype.options.icon = defaultIcon;

const data = [
	{latitude: 53.720976, longitude: 91.44242300000001, name: "Абакан", value: 317593},
	{latitude: 64.539304, longitude: 40.518735, name: "Архангельск", value: 514828},
	{latitude: 51.128422, longitude: 71.430564, name: "Нур-султан", value: 252037},
	{latitude: 46.347869, longitude: 48.033574, name: "Астрахань", value: 933445},
	{latitude: 53.356132, longitude: 83.74961999999999, name: "Барнаул", value: 633893},
	{latitude: 50.597467, longitude: 36.588849, name: "Белгород", value: 360378},
	{latitude: 52.541444, longitude: 85.219686, name: "Бийск", value: 960795},
	{latitude: 42.871027, longitude: 74.59452, name: "Бишкек", value: 119371},
	{latitude: 50.290658, longitude: 127.527173, name: "Благовещенск", value: 555242},
	{latitude: 56.151382, longitude: 101.634152, name: "Братск", value: 184668},
	{latitude: 53.2434, longitude: 34.364198, name: "Брянск", value: 258696},
	{latitude: 58.521475, longitude: 31.275475, name: "Великий Новгород", value: 297204},
	{latitude: 43.134019, longitude: 131.928379, name: "Владивосток", value: 278571},
	{latitude: 43.024122, longitude: 44.690476, name: "Владикавказ", value: 747386},
	{latitude: 56.129042, longitude: 40.40703, name: "Владимир", value: 101799},
	{latitude: 48.707103, longitude: 44.516939, name: "Волгоград", value: 319873},
	{latitude: 59.220492, longitude: 39.891568, name: "Вологда", value: 369332},
	{latitude: 51.661535, longitude: 39.200287, name: "Воронеж", value: 436125},
	{latitude: 43.317992, longitude: 45.698197, name: "Грозный", value: 98091},
	{latitude: 48.015877, longitude: 37.80285, name: "Донецк", value: 567892},
	{latitude: 56.838002, longitude: 60.597295, name: "Екатеринбург", value: 515318},
	{latitude: 57.000348, longitude: 40.973921, name: "Иваново", value: 149690},
	{latitude: 56.852775, longitude: 53.211463, name: "Ижевск", value: 983398},
	{latitude: 52.286387, longitude: 104.28066, name: "Иркутск", value: 682248},
	{latitude: 55.795793, longitude: 49.106585, name: "Казань", value: 911313},
	{latitude: 55.916229, longitude: 37.854467, name: "Калининград", value: 214300},
	{latitude: 54.507014, longitude: 36.252277, name: "Калуга", value: 532675},
	{latitude: 56.414897, longitude: 61.918905, name: "Каменск-Уральский", value: 201207},
	{latitude: 55.359594, longitude: 86.08778100000001, name: "Кемерово", value: 116999},
	{latitude: 50.402395, longitude: 30.532690, name: "Киев", value: 682740},
	{latitude: 54.079033, longitude: 34.323163, name: "Киров", value: 865196},
	{latitude: 50.54986, longitude: 137.007867, name: "Комсомольск-на-Амуре", value: 715041},
	{latitude: 55.916229, longitude: 37.854467, name: "Королев", value: 926206},
	{latitude: 57.767683, longitude: 40.926418, name: "Кострома", value: 294257},
	{latitude: 45.023877, longitude: 38.970157, name: "Краснодар", value: 426161},
	{latitude: 56.008691, longitude: 92.870529, name: "Красноярск", value: 528102},
	{latitude: 51.730361, longitude: 36.192647, name: "Курск", value: 10272},
	{latitude: 52.61022, longitude: 39.594719, name: "Липецк", value: 811002},
	{latitude: 53.411677, longitude: 58.984415, name: "Магнитогорск", value: 136791},
	{latitude: 42.984913, longitude: 47.504646, name: "Махачкала", value: 266820},
	{latitude: 53.906077, longitude: 27.554914, name: "Минск", value: 30445},
	{latitude: 55.755773, longitude: 37.617761, name: "Москва", value: 768255},
	{latitude: 68.96956299999999, longitude: 33.07454, name: "Мурманск", value: 84053},
	{latitude: 55.743553, longitude: 52.39582, name: "Набережные Челны", value: 777125},
	{latitude: 56.323902, longitude: 44.002267, name: "Нижний Новгород", value: 97818},
	{latitude: 57.910144, longitude: 59.98132, name: "Нижний Тагил", value: 690188},
	{latitude: 53.786502, longitude: 87.155205, name: "Новокузнецк", value: 555933},
	{latitude: 44.723489, longitude: 37.76866, name: "Новороссийск", value: 30951},
	{latitude: 55.028739, longitude: 82.90692799999999, name: "Новосибирск", value: 934891},
	{latitude: 69.349039, longitude: 88.201014, name: "Норильск", value: 577451},
	{latitude: 54.989342, longitude: 73.368212, name: "Омск", value: 289167},
	{latitude: 52.970306, longitude: 36.063514, name: "Орел", value: 821084},
	{latitude: 51.76806, longitude: 55.097449, name: "Оренбург", value: 564660},
	{latitude: 53.194546, longitude: 45.019529, name: "Пенза", value: 642571},
	{latitude: 56.908099, longitude: 59.942935, name: "Первоуральск", value: 666858},
	{latitude: 58.004785, longitude: 56.237654, name: "Пермь", value: 469826},
	{latitude: 53.895355, longitude: 86.744657, name: "Прокопьевск", value: 773091},
	{latitude: 57.819365, longitude: 28.331786, name: "Псков", value: 731011},
	{latitude: 47.227151, longitude: 39.744972, name: "Ростов-на-Дону", value: 684954},
	{latitude: 58.13853, longitude: 38.573586, name: "Рыбинск", value: 987253},
	{latitude: 54.619886, longitude: 39.744954, name: "Рязань", value: 190289},
	{latitude: 53.195533, longitude: 50.101801, name: "Самара", value: 848548},
	{latitude: 59.938806, longitude: 30.314278, name: "Санкт-Петербург", value: 338915},
	{latitude: 51.531528, longitude: 46.03582, name: "Саратов", value: 503155},
	{latitude: 44.616649, longitude: 33.52536, name: "Севастополь", value: 770774},
	{latitude: 64.55818600000001, longitude: 39.82962, name: "Северодвинск", value: 940424},
	{latitude: 64.558186, longitude: 39.82962, name: "Северодвинск", value: 682168},
	{latitude: 44.952116, longitude: 34.102411, name: "Симферополь", value: 665989},
	{latitude: 43.581509, longitude: 39.722882, name: "Сочи", value: 886657},
	{latitude: 45.044502, longitude: 41.969065, name: "Ставрополь", value: 665785},
	{latitude: 43.015679, longitude: 41.025071, name: "Сухум", value: 642543},
	{latitude: 52.721246, longitude: 41.452238, name: "Тамбов", value: 845999},
	{latitude: 41.314321, longitude: 69.267295, name: "Ташкент", value: 684047},
	{latitude: 56.859611, longitude: 35.911896, name: "Тверь", value: 895284},
	{latitude: 53.511311, longitude: 49.418084, name: "Тольятти", value: 365649},
	{latitude: 56.495116, longitude: 84.972128, name: "Томск", value: 928111},
	{latitude: 54.193033, longitude: 37.617752, name: "Тула", value: 377263},
	{latitude: 57.153033, longitude: 65.534328, name: "Тюмень", value: 557502},
	{latitude: 51.833507, longitude: 107.584125, name: "Улан-Удэ", value: 76502},
	{latitude: 54.317002, longitude: 48.402243, name: "Ульяновск", value: 302834},
	{latitude: 54.734768, longitude: 55.957838, name: "Уфа", value: 549728},
	{latitude: 48.472584, longitude: 135.057732, name: "Хабаровск", value: 649355},
	{latitude: 49.993499, longitude: 36.230376, name: "Харьков", value: 260225},
	{latitude: 56.1439, longitude: 47.248887, name: "Чебоксары", value: 563567},
	{latitude: 55.159774, longitude: 61.402455, name: "Челябинск", value: 931338},
	{latitude: 47.708485, longitude: 40.215958, name: "Шахты", value: 357136},
	{latitude: 51.498891, longitude: 46.125121, name: "Энгельс", value: 792182},
	{latitude: 46.959118, longitude: 142.738068, name: "Южно-Сахалинск", value: 582145},
	{latitude: 62.027833, longitude: 129.704151, name: "Якутск", value: 966318},
	{latitude: 57.626569, longitude: 39.893822, name: "Ярославль", value: 611577}
];

function App() {
  return (
    <MapContainer className="map" center={[65, 107]} zoom={4} scrollWheelZoom={true} maxZoom={18}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((item, i) => (
          <Marker key={i} position={[item.latitude, item.longitude]}>
            <Popup>
              Город: {item.name} <br /> Количество: {item.value}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default App;
