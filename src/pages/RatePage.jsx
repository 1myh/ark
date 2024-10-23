import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useAtom } from 'jotai';
import { atomLanguage } from '../atoms/atom';

let Stars = ({ title, onRatingChange }) => {
  const [rating, setRating] = useState(0);
	let [language, setLanguage] = useAtom(atomLanguage)

  const handleClick = (index) => {
    setRating(index);
    onRatingChange(index);
  };

  return (
    <div className={`flex justify-between my-3 ${language ? "flex-row-reverse" : "flex-row"}`}>
      <h1 className={`text-xl sm:text-2xl text-right`}>{title}</h1>
      <div className={`flex`}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-xl sm:text-2xl hover:text-dish transition-all duration-200 mx-2 cursor-pointer ${
              index < rating ? 'text-dish' : 'text-gray-400'
            }`}
            onClick={() => handleClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

const RatePage = () => {
  const [language] = useAtom(atomLanguage);
  const [ratings, setRatings] = useState({
    foodQuality: 0,
    service: 0,
    priceValue: 0,
    cleanliness: 0,
  });
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [familyFriendly, setFamilyFriendly] = useState(false);
  const [recommend, setRecommend] = useState(false);

  const handleRatingChange = (key, rating) => {
    setRatings((prev) => ({
      ...prev,
      [key]: rating,
    }));
  };

  const handleSubmit = () => {
    const feedbackObject = {
      ratings,
      phone,
      email,
      notes,
      familyFriendly,
      recommend,
    };
    console.log(feedbackObject);
  };

  return (
    <div className={`flex flex-col w-full max-w-4xl mx-auto p-6 sm:p-10`}>
      <Stars
        title={language ? "جودة الطعام" : "food quality"}
        onRatingChange={(rating) => handleRatingChange('foodQuality', rating)}
      />
      <Stars
        title={language ? "الخدمة" : "service"}
        onRatingChange={(rating) => handleRatingChange('service', rating)}
      />
      <Stars
        title={language ? "السعر مقابل الخدمة" : "price per service"}
        onRatingChange={(rating) => handleRatingChange('priceValue', rating)}
      />
      <Stars
        title={language ? "نظافة المطعم" : "cleanliness"}
        onRatingChange={(rating) => handleRatingChange('cleanliness', rating)}
      />
      {/* FIRST QUESTION */}
      <div className={`flex ${language ? 'flex-row-reverse' : 'flex-row'} w-full my-3`}>
				<h1 className={`text-xl sm:text-2xl ${language ? 'text-right' : 'text-left'}`}>
					{language ? "هل يتمتع مطعمنا ببيئة صديقة للعائلة؟" : "Is our restaurant good for families?"}
				</h1>
				<div className={`flex ${language ? 'flex-row-reverse' : 'flex-row'} mx-2`}>
					<label className={`text-lg sm:text-2xl ${language ? 'text-right' : 'text-left'}`}>
						{language ? "نعم" : "yes"}
						<input type="checkbox" onChange={() => setFamilyFriendly(true)} />
					</label>
					<label className={`text-lg sm:text-2xl ${language ? 'text-right' : 'text-left'} mx-2`}>
						{language ? "لا" : "no"}
						<input type="checkbox" onChange={() => setFamilyFriendly(false)} />
					</label>
				</div>
			</div>

      {/* SECOND QUESTION */}
      <div className={`flex ${language ? 'flex-row-reverse' : 'flex-row'} my-3`}>
				<h1 className={`text-xl sm:text-2xl ${language ? 'text-right' : 'text-left'}`}>
					{language ? "هل توصي بنا لصديق؟" : "Do you recommend us to a friend?"}
				</h1>
				<label className={`mx-2 text-lg sm:text-2xl ${language ? 'text-right' : 'text-left'}`}>
					{language ? "نعم" : "yes"}
					<input type="checkbox" onChange={() => setRecommend(true)} />
				</label>
				<label className={`mx-2 text-lg sm:text-2xl ${language ? 'text-right' : 'text-left'}`}>
					{language ? "لا" : "no"}
					<input type="checkbox" onChange={() => setRecommend(false)} />
				</label>
			</div>


      <div className={`flex flex-col`}>
        <input
          dir={language ? "rtl" : ""}
          className={`border-2 my-2 rounded-lg px-3 py-2 placeholder:text-black border-black focus:outline-none`}
          placeholder={language ? "رقم الهاتف" : "phone number"}
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          dir={language ? "rtl" : ""}
          className={`border-2 my-2 rounded-lg px-3 py-2 placeholder:text-black border-black focus:outline-none`}
          placeholder={language ? "البريد الالكتروني" : "email"}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          dir={language ? "rtl" : ""}
          className={`border-2 my-2 rounded-lg px-3 py-2 placeholder:text-black border-black focus:outline-none min-h-20`}
          placeholder={language ? "ملاحظات اخرى" : "other notes"}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className={`w-full flex justify-center my-20`}>
        <button
          className={`bg-dish w-fit text-white px-6 py-3 rounded-2xl text-lg sm:text-xl`}
          onClick={handleSubmit}
        >
          {language ? "ارسال التقييم" : "send rate"}
        </button>
      </div>
    </div>
  );
};

export default RatePage;
