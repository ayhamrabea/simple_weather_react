import { useState } from "react";
import { useLazyGetWeatherQuery } from "../../features/weather/Weather";
import { FormField } from "../FormField/FormField";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";
import Icon from "../Icon/Icon";

export default function ShowWeather() {
    const [inputCity, setInputCity] = useState("Moscow");
    const [trigger, { data, isFetching, isError }] = useLazyGetWeatherQuery();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputCity.trim() !== "") {
        trigger(inputCity);
        }
    };

    const popularCities = [
        "Moscow",
        "London",
        "Paris",
        "New York",
        "Tokyo",
        "Berlin",
        "Cairo",
        "Dubai"
    ];

    return (
        <div className="weather">
            <form className="weather__form" onSubmit={handleSearch}>
                <FormField>
                <input
                    type="text"
                    value={inputCity}
                    placeholder="Город.."
                    list="city-list"
                    onChange={(e) => setInputCity(e.target.value)}
                    autoComplete="on"
                />
                <Icon name="search" />
                </FormField>
                <datalist id="city-list">
                    {popularCities.map((city) => (
                        <option key={city} value={city} />
                    ))}
                </datalist>
                <Button className="btn" type="submit">
                    поиск
                </Button>
            </form>

            {isFetching && <Loader />}
            {isError && <p className="weather__error"> error </p>}

            {data && (
                <div className="weather__info">
                    <h5 className="weather__city">Город: {inputCity}</h5>
                    <p className="weather__key">
                        температура: <span className="weather__value">{data.main.temp}°C</span>
                    </p>
                    <p className="weather__key">
                        погодные условия: <span className="weather__value">{data.weather[0].description}</span>
                    </p>
                    <p className="weather__key">
                        скорость ветра: <span className="weather__value">{data.wind.speed} м/с</span>
                    </p>
                </div>
            )}
        </div>
    );
}
