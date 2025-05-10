"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "DEVANSH KUMAR VERMA",
    review:
      "I roamed amloast all the shops but no one was able to fix my mac air m2 then my friend told about this shop and i got it fixed here within hours.",
    rating: 5,
    image: "https://img.freepik.com/premium-vector/boy-work-computers_987671-48.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Mt_rider9463",
    review:
      "I am very happy with service and product also thank you so much Laptop Gallery",
    rating: 5,
    image: "https://img.freepik.com/premium-vector/boy-work-computers_987671-48.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "Ambarish Kalindi",
    review:
      "I bought a very slim and awesome laptop from here i recommend to all must visit laptop gallery if u want to buy a good laptop New condition and up to 60% off",
    rating: 4,
    image: "https://img.freepik.com/premium-vector/boy-work-computers_987671-48.jpg?ga=GA1.1.222190205.1745914543&semt=ais_hybrid&w=740",
  },
]

const Reviews = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Customer Reviews
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See what our customers are saying about us
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={review.image || "/placeholder.svg"} alt={review.name} />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">"{review.review}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
