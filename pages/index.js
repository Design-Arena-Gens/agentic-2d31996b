import Head from "next/head";
import styles from "@/styles/Home.module.css";

const product = {
  brand: "Uzum Selection",
  title: "Universal krossovkalar erkaklar va ayollar uchun — och sariq",
  article: "SKU 7046510",
  price: {
    current: 270000,
    old: 329000
  },
  rating: 4.9,
  reviews: 186,
  badges: ["Top savdo", "Ekspress yetkazib berish", "Rasmiy kafolat"],
  color: {
    name: "Och sariq",
    hex: "#f7ce58"
  },
  sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
  highlights: [
    "Yengil va nafas oluvchi to`qima",
    "EVA taglik qo'shimcha amortizatsiya uchun",
    "Universal dizayn — casual va sport uslubiga mos",
    "Antibakterial ichki qatlam oyoq kiyimni yangi saqlaydi"
  ],
  shipping: {
    pickup: "Bugun - Toshkent bo‘ylab yetkazib berish",
    returnPolicy: "14 kun ichida qaytarish imkoniyati"
  },
  images: [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511559925793-90cf91ea4943?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  ]
};

function formatPrice(amount) {
  return `${amount.toLocaleString("ru-RU")} сум`;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Wildberries mahsulot kartasi — Och sariq krossovkalar</title>
        <meta
          name="description"
          content="Wildberries uchun optimallashtirilgan yuqori konvertatsiyali mahsulot kartasi: universal och sariq krossovkalar."
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.gallery}>
            <div className={styles.preview}>
              <img
                src={product.images[0]}
                alt={`${product.title} asosiy rasm`}
                className={styles.previewImage}
              />
            </div>
            <div className={styles.thumbList}>
              {product.images.slice(1).map((image, index) => (
                <div key={image} className={styles.thumbnail}>
                  <img
                    src={image}
                    alt={`${product.title} rasm ${index + 2}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.brand}>{product.brand}</span>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.article}>{product.article}</p>
              <div className={styles.badges}>
                {product.badges.map((badge) => (
                  <span key={badge} className={styles.badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.ratingBlock}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={
                      idx < Math.round(product.rating)
                        ? styles.starActive
                        : styles.star
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className={styles.ratingValue}>
                {product.rating.toFixed(1)}
              </span>
              <span className={styles.ratingReviews}>
                {product.reviews.toLocaleString("ru-RU")} sharh
              </span>
            </div>

            <div className={styles.priceBlock}>
              <div>
                <div className={styles.currentPrice}>
                  {formatPrice(product.price.current)}
                </div>
                <div className={styles.oldPrice}>
                  {formatPrice(product.price.old)}
                </div>
              </div>
              <div className={styles.discount}>
                −
                {Math.round(
                  ((product.price.old - product.price.current) /
                    product.price.old) *
                    100
                )}
                %
              </div>
            </div>

            <div className={styles.selector}>
              <div className={styles.selectorLabel}>Rang:</div>
              <div className={styles.colorSwatch}>
                <span
                  className={styles.colorDot}
                  style={{ backgroundColor: product.color.hex }}
                />
                <span>{product.color.name}</span>
              </div>
            </div>

            <div className={styles.selector}>
              <div className={styles.selectorLabel}>O‘lcham:</div>
              <div className={styles.sizeGrid}>
                {product.sizes.map((size) => (
                  <button key={size} type="button" className={styles.sizeButton}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.primaryAction}>
                Savatga qo‘shish
              </button>
              <button type="button" className={styles.secondaryAction}>
                Bir zumda sotib olish
              </button>
            </div>

            <div className={styles.shipping}>
              <div>
                <h2>Yetkazib berish</h2>
                <p>{product.shipping.pickup}</p>
              </div>
              <div>
                <h2>Qaytarish</h2>
                <p>{product.shipping.returnPolicy}</p>
              </div>
            </div>

            <div className={styles.highlights}>
              <h2>Afzalliklar</h2>
              <ul>
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
