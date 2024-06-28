import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const campaigns = [
  { id: '1', name: 'Janeiro Branco', month: 'Janeiro', description: 'Conscientização sobre saúde mental.', features: 'Foco na importância da saúde mental, promoção de palestras e workshops sobre bem-estar emocional.', color: '#FFFFFF' },
  { id: '2', name: 'Fevereiro Roxo', month: 'Fevereiro', description: 'Conscientização sobre Lúpus, Fibromialgia e Alzheimer.', features: 'Informações sobre sintomas, diagnóstico precoce e tratamentos disponíveis.', color: '#800080' },
  { id: '3', name: 'Fevereiro Laranja', month: 'Fevereiro', description: 'Conscientização sobre Leucemia.', features: 'Campanhas de doação de medula óssea e informações sobre o tratamento da leucemia.', color: '#FFA500' },
  { id: '4', name: 'Março Azul-Marinho', month: 'Março', description: 'Conscientização sobre câncer colorretal.', features: 'Enfoque na prevenção e na importância do diagnóstico precoce, dicas de alimentação saudável.', color: '#000080' },
  { id: '5', name: 'Abril Azul', month: 'Abril', description: 'Conscientização sobre o autismo.', features: 'Eventos educativos e informativos sobre o autismo, inclusão social e direitos das pessoas com autismo.', color: '#0000FF' },
  { id: '6', name: 'Abril Verde', month: 'Abril', description: 'Conscientização sobre segurança no trabalho.', features: 'Palestras e treinamentos sobre práticas seguras no ambiente de trabalho, prevenção de acidentes.', color: '#008000' },
  { id: '7', name: 'Maio Amarelo', month: 'Maio', description: 'Conscientização sobre segurança no trânsito.', features: 'Campanhas educativas sobre direção segura, prevenção de acidentes e comportamento responsável no trânsito.', color: '#FFFF00' },
  { id: '8', name: 'Junho Vermelho', month: 'Junho', description: 'Conscientização sobre doação de sangue.', features: 'Incentivo à doação de sangue, informações sobre a importância da doação regular e os benefícios para a sociedade.', color: '#FF0000' },
  { id: '9', name: 'Julho Amarelo', month: 'Julho', description: 'Conscientização sobre hepatites virais.', features: 'Informações sobre prevenção, diagnóstico e tratamento das hepatites A, B e C.', color: '#FFFF00' },
  { id: '10', name: 'Agosto Dourado', month: 'Agosto', description: 'Conscientização sobre aleitamento materno.', features: 'Promoção dos benefícios do aleitamento materno, apoio às mães que amamentam e divulgação de boas práticas de amamentação.', color: '#FFD700' },
  { id: '11', name: 'Agosto Lilás', month: 'Agosto', description: 'Conscientização sobre a violência contra a mulher.', features: 'Campanhas de prevenção e combate à violência doméstica, apoio às vítimas e promoção dos direitos das mulheres.', color: '#C71585' },
  { id: '12', name: 'Setembro Amarelo', month: 'Setembro', description: 'Conscientização sobre a prevenção ao suicídio.', features: 'Promoção de ações de apoio emocional, campanhas de prevenção ao suicídio e informações sobre onde buscar ajuda.', color: '#FFFF00' },
  { id: '13', name: 'Setembro Verde', month: 'Setembro', description: 'Conscientização sobre a doação de órgãos.', features: 'Informações sobre a importância da doação de órgãos, procedimentos para se tornar um doador e depoimentos de transplantados.', color: '#008000' },
  { id: '14', name: 'Outubro Rosa', month: 'Outubro', description: 'Conscientização sobre o câncer de mama.', features: 'Campanhas de prevenção, importância do autoexame, mamografias e apoio às pacientes com câncer de mama.', color: '#FFC0CB' },
  { id: '15', name: 'Novembro Azul', month: 'Novembro', description: 'Conscientização sobre o câncer de próstata.', features: 'Foco na prevenção e diagnóstico precoce do câncer de próstata, informações sobre exames e tratamentos.', color: '#0000FF' },
  { id: '16', name: 'Novembro Roxo', month: 'Novembro', description: 'Conscientização sobre a prematuridade.', features: 'Informações sobre cuidados com bebês prematuros, apoio às famílias e promoção da saúde neonatal.', color: '#800080' },
  { id: '17', name: 'Dezembro Vermelho', month: 'Dezembro', description: 'Conscientização sobre o combate ao HIV/AIDS.', features: 'Campanhas de prevenção, importância do uso de preservativos, tratamento e apoio às pessoas vivendo com HIV/AIDS.', color: '#FF0000' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={{ uri: 'https://example.com/background-image.jpg' }} style={styles.backgroundImage}>
      <View style={styles.header}>
        <Image source={require('../imagens/splash.png')} style={styles.icon} />
        
      </View>
      <View style={styles.container}>
        <FlatList
          data={campaigns}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.button, { backgroundColor: item.color }]}
              onPress={() => navigation.navigate('Details', { campaign: item })}
            >
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 100,
    height: 100,
    alignContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    color: '#black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});