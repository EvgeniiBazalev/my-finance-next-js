import axios from 'axios';

// URL вашей базы данных Firebase Realtime Database
const firebaseDatabaseURL = 'https://myfinancenextjs-default-rtdb.europe-west1.firebasedatabase.app/';
const dataPath = 'collectionOne';

const newData = {
    key1: 'new_value1',
    key2: 'new_value2',
};

// Функция для отправки данных
let postData = async function updateOrCreateData() {
    try {
        // Выполняем GET-запрос для проверки существующих данных
        const response = await axios.get(`${firebaseDatabaseURL}/${dataPath}.json`);

        if (response.data) {
            // Если данные существуют, выполняем PUT-запрос для обновления
            await axios.put(`${firebaseDatabaseURL}/${dataPath}.json`, newData);
        } else {
            // Если данных нет, выполняем POST-запрос для создания новой записи
            await axios.post(`${firebaseDatabaseURL}/${dataPath}.json`, newData);
        }

        console.log('Данные успешно обновлены или созданы в базе данных Firebase');
    } catch (error) {
        console.error('Ошибка при работе с данными в базе данных Firebase:', error);
    }
}

export default postData;

