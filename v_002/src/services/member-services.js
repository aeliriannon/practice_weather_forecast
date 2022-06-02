import axios from "axios";

class MemberServices {
    _apiBase = 'https://api.openweathermap.org/';
    _apiKey = 'your key';

    getResourse = async (url) => {
        let result = await axios.get(url);
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }
        return result.data;
    }

    getForecastOne = async () => {
        const result = await this.getResource('https://api.openweathermap.org/data/2.5/weather?q=London,ru&appid=your_key');
        return this._transformData(result.data);
    }

    _transformData = (data) => {
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            urlIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            id: data.id
        }
    }
}

export default MemberServices;