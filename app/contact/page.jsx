"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    agency: "",
    hasWebsite: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzcqAthL9R5GZw3SxExJ-aKt_sv6D_jC1bi6LyPtqN-YHN8ehHpULHalmEpKldIld8b6Q/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      });

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        agency: "",
        hasWebsite: "",
      });

    } catch (err) {
      alert("Erreur");
    }

    setLoading(false);
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#1a1a1f",
    color: "white",
    outline: "none",
  };

  return (
  <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
    
    {/* 🔥 HEADLINE */}
    <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
      Agence de voyage ?
    </h1>

    <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#aaa" }}>
      Recevez un plan gratuit pour générer plus de clients en ligne
    </h2>

    {/* 💡 SUBTEXT */}
    <p style={{ marginBottom: "30px", color: "#bbb", lineHeight: "1.6" }}>
      Nous analysons votre présence digitale et vous proposons 
      des actions concrètes pour attirer plus de demandes clients.
    </p>

    {/* ✅ SUCCESS MESSAGE */}
    {success && (
      <div style={{
        background: "#1f7a3f",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "15px",
        textAlign: "center"
      }}>
        ✅ Demande envoyée avec succès !
      </div>
    )}

    {/* 📝 FORM */}
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

      <input
        name="name"
        value={form.name}
        placeholder="Votre nom"
        required
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="phone"
        value={form.phone}
        placeholder="Téléphone"
        required
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        name="agency"
        value={form.agency}
        placeholder="Nom de votre agence"
        onChange={handleChange}
        style={inputStyle}
      />

      <select
        name="hasWebsite"
        value={form.hasWebsite}
        onChange={handleChange}
        style={inputStyle}
      >
        <option value="">Avez-vous un site web ?</option>
        <option value="yes">Oui</option>
        <option value="no">Non</option>
      </select>

      {/* 🚀 BUTTON */}
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "14px",
          background: "linear-gradient(90deg, #7f5af0, #2cb67d)",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Envoi..." : "Recevoir mon plan gratuit"}
      </button>

    </form>

    {/* 🔥 TRUST */}
    <p style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
      ⏱ Réponse rapide (moins de 24h)
    </p>
  </div>
);
}



// "use client";
// import { useState } from "react";

// export default function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     agency: "",
//     hasWebsite: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setSuccess(false);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbwFlzs2ChLYbZJ7l9e1jxgrqyN9lheoMngU7HBIWZYDdWAcvjs7WGJGb5pVT27xt3YjQg/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           body: JSON.stringify(form),
//         }
//       );

//       setSuccess(true);

//       setForm({
//         name: "",
//         phone: "",
//         agency: "",
//         hasWebsite: "",
//       });
//     } catch (error) {
//       alert("❌ Error sending form.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      
//       <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
//         Agence de voyage ?
//       </h1>

//       <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#444" }}>
//         Recevez un plan gratuit pour générer plus de clients en ligne
//       </h2>

//       <p style={{ marginBottom: "30px", color: "#666" }}>
//         Nous analysons votre présence digitale et vous proposons 
//         des actions concrètes pour attirer plus de demandes clients.
//       </p>

//       {/* ✅ SUCCESS MESSAGE */}
//       {success && (
//         <div style={{
//           background: "#d4edda",
//           color: "#155724",
//           padding: "10px",
//           borderRadius: "6px",
//           marginBottom: "15px"
//         }}>
//           ✅ Demande envoyée avec succès !
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="contact-form">

//         <input
//           name="name"
//           value={form.name}
//           placeholder="Votre nom"
//           required
//           onChange={handleChange}
//         />

//         <input
//           name="phone"
//           value={form.phone}
//           placeholder="Téléphone"
//           required
//           onChange={handleChange}
//         />

//         <input
//           name="agency"
//           value={form.agency}
//           placeholder="Nom de votre agence"
//           onChange={handleChange}
//         />

//         <select
//           name="hasWebsite"
//           value={form.hasWebsite}
//           onChange={handleChange}
//         >
//           <option value="">Avez-vous un site web ?</option>
//           <option value="yes">Oui</option>
//           <option value="no">Non</option>
//         </select>

//         <button type="submit" disabled={loading}>
//           {loading ? "Envoi..." : "Recevoir mon plan gratuit"}
//         </button>

//       </form>

//       <p style={{ marginTop: "20px", fontSize: "14px", color: "#888" }}>
//         ⏱ Réponse rapide (moins de 24h)
//       </p>
//     </div>
//   );
// }