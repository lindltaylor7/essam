import { View, Page, Document, StyleSheet, Text } from "@react-pdf/renderer";

const ticketWidth = 80 * 2.83465;
const ticketHeight = 200 * 2.83465;

const styles = StyleSheet.create({
  page: {
    width: `${ticketWidth}pt`,
    height: `${ticketHeight}pt`,
    padding: 12,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 15,
    textAlign: "center",
  },
  businessName: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    textDecoration: "underline",
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },
  text: {
    fontSize: 10,
    marginBottom: 6,
  },
  divider: {
    borderBottom: "1pt solid #000",
    marginVertical: 8,
  },
  section: {
    marginBottom: 10,
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 15,
    fontStyle: "italic",
    color: "#555",
  },
  highlight: {
    backgroundColor: "#f0f0f0",
    padding: 4,
    borderRadius: 2,
  },
});

const Ticket = ({ sale }) => (
  <Document>
    <Page size={[ticketWidth, ticketHeight]} style={styles.page}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.businessName}>
          EMPRESA DE SERVICIOS SANTA MONICA S.R.L.
        </Text>
        <Text style={styles.text}>RUC: 20319127845</Text>
      </View>

      <View style={styles.divider} />

      {/* Título */}
      <Text style={styles.title}>TICKET DE CONSUMO</Text>

      {/* Información del cliente */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>DATOS DEL CLIENTE:</Text>
        <Text style={styles.text}>Nombre: {sale.diner.dinerName}</Text>
        <Text style={styles.text}>DNI: {sale.diner.dinerDni}</Text>
      </View>

      <View style={styles.divider} />

      {/* Detalle del producto */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>DETALLE DEL CONSUMO:</Text>
        <View style={styles.highlight}>
          <Text style={styles.text}>Producto: {sale.service.serviceName}</Text>
          <Text style={styles.text}>Precio: S./{sale.price.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Fecha y hora */}
      <View style={styles.section}>
        <Text style={styles.text}>
          Fecha: {new Date().toLocaleDateString()}
        </Text>
        <Text style={styles.text}>
          Hora:{" "}
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>

      {/* Pie de página */}
      <View style={styles.footer}>
        <Text>* Este documento no tiene validez contable o tributaria</Text>
      </View>
    </Page>
  </Document>
);

export default Ticket;
