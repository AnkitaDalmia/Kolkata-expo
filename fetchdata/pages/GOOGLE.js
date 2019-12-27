import React, { Component } from 'react';
import {Image, Text, View,TouchableOpacity,StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


 
export default class Title_Sponsors extends Component {
  render() {
    return (
      <View style={{paddingBottom:120}}>
        <ScrollView>
         <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABYlBMVEX//f7///9Oge7hGDokv1r1wij///z9/////P8nvVoXvVT//fz7//9Lf+7///tOge+Iz52E15xgjfL///fY5vFOguv2///kFzpQf/LzwyqAnu7eGjrhACr5/f9Be+3///TkACVNg+flAC9Lx3RRfvXqEzneDDHYAC5Cd+7J2vj2wSzuwBLzwQDsAC/kP1n4vhVYiun57e3XACO+0vGWt/WKp+bn8PLoy8z32oPriZnlVm711ddzl+r877z5y1WywOj+vSrfdX768duNrfPz2I1KhN/mkpvjpbDrZ3nzsbWqy+37ytL05OPeRVnnPl7cZ2/S3+/uzl/Q4vqruu3UfITxzj355bD98My0v+Lpur47dfTSR1zzhpLhjZfkMErXNkP36ajw0Cr24oPwM0/v0lf5yEf4q7GGovea0Klhh9neXG/LDjfzgpT41XRxkd/c8+TP79G4z+eRtOSmtfr+/OPilJFUrrFMAAAVsElEQVR4nO1dDVsbN7Ye2YukXmnkXeQZf8/YXjMMmGAbgkmCUxeSkJCQLoUNFNqyaZvS23TTvc3N/f/3SDMG47GbQJaSbfQ+T0kKY3zmnfPxniPJsZDBKKzrNuADhOEkCcNJEoaTJAwnSRhOkjCcJGE4ScJwkoThJAnDSRKGkyQMJ0kYTpIwnCRhOEnCcJKE4SQJw0kShpMkDCdJGE6SMJwkYThJwnCShOEkCcNJEoaTJAwnSRhOkjCcJGE4ScIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMPjPBGMMCymEwJhjxq7bnA8CHAMdTK2AUKDHrIMAkMTI7WYB3QpHUl63PdcHigHwp+DZvWLbsT2v0bCd6d7enCvUDym1PogwooxQ/Re9kHe1TiwpQMqdlcaRkxogk/JsLyzu+Bi/m7v8DkuOmPzrfwDw5V+WRa707QTFUvw6HXrOgzNOUk7Kdmr5sLZXwQRb9K2/5XfghKM//1eEv1z5e0m+3NYu0gAi7JiTRiplp2p23ms/xgh/CJzQCnDyJ40r5YRKykR2JbSdvPYNCBrbzqTsfD4Df83YKSfjeL2sYASLKzTj3UCAk08++eRPn1ytn0gqcR8iZChmao7C0HfAW5axSrZXaMc7gcR+csWcUOGveDXtJDHsvA1ekh/6DoRR7aaQlFyhHe+E34UTZkn3FxU2DtQZiJgU1OHUdA/QdjxPZ5ZMJpNy7Ey4QthH4SeS4u4vDR0wtu04kEl6e7tdrrfyuNnHRaehQgjcBlLvnKDXr1GunhNQHpVfPEeRonKpl7mZlQgaHqb6HlD4uPt4OgRa8qna0bKUHwUnyJIrYUYnUxuUyOuuQL7EglkqSpgUxEL+43wj7zjhskAc/+E5oZhQ/39DyCWQMWzHq+2CwBdKxhPNCVHaFlPU/eUoA5RAR0jfrlGuGlfMCdy2nItkq51qeEV3wrtg/jpclvTDaJGvmBNJhTtdi0Sr491zJRuvybBEWczotdccjav2Eyb3nLyjSHHCFV+QSZ0ewZJZH0AuUbhqTnDWAUZAfDipnsBQacanC8oQFJwPg5Ir1ydiz0tF7Y3dvX6J+k64ak5Y14nEWt7rC/lhpNC34ao58fu68YPw6Unmvk9ssHcYrsAlg7fQinDS4E59F8q+/mF8VXyt+jKBE/UjNFAK6rLL3omcjvJr3pu7JOfqZZQgwgHwhVD4Moke0DcWXKIORMDVYuIoU90dA7kIzQVcJChGoJksNRslCE/gBEl474oLv16BcVq55DEDlA3zelqSmsaX9cOIjM7a4cnJydaTbUw4pXz8pcIlln/wXOHgDeNcqeWx1zEk/e7ucv/L5Z2ulMCHxFLqebEkbCwnBNQlQWz7cOvk5HCtg3iFXpaTvp3Res3rX3o6D81iZ+tOqVwOyuWl2fTi+qrgE/wEbTx/MT/VivDsiwNKJgge2b057XhhGHp2/sc5LjDfmdudA+xISsZyQi3XPVw/nl1aqlar5fTnJx247hKcYIp7Tko3f173MnKMEKtioe312XqQTpdKpXQuF8wEN44fCuKyoXhmcCGVaONFoTU1NdWcmp+fL0zNf7bw7XNhVaDRxENZBmIEZYuhA+JACYSMU/Pau7LieB605rZDoBtJcEJVuDw8LteDgR1BOfdPkA9cNScXuSMqLOxkdD6xe5XLzRQ5Yd+U6+lzKAXV4yfEHc5xkFs5uz91HoWpVrNwoBYmzmYyEDSSvvbg5jNq6hmtHdS8vpt6oILcnoZGPckJxMn2V9VS7syGXLo0W1olF1YXjIiuZ0cN8U005tUTD0gNrmUVvrZ4Iyid5yRXKs1WN90hx0PSIhvPFqZGMT811bqFEbVOrxUCZ9vKI4aWDlKNWnhzugYN2RhOtBe41mGuXpoZeTTlG1uQdi8WP5CwdrxMTT0Muz9uzPpbx8ZQVG9W00Fp+PlEnORm0tVHQ2uqVPC7halCIUGK8pVX/plApgLtOA1HBc0QHLtm5/O1/EROyGEAZozYkUsHwQk48sX6eIaXvchBw100ygl0QveKE+FDbcAIASXwQMAx0tqkIAeEgDHwrXT5EccVGr2N4AdNyCDACmBecTM/NV+IXaX1Cp3NqWQWYlk5iZ3Jw1/UmkEGwsiBP5ShwAnwN8wJwtTlq7M6fLUhOUVPLjIjV95yycVEF0NfetGTCHeSnFjSCfP5+IE5MeIn53UtAcG6fazjBoI3HVSrQM9SdTaYiUNp6Wui+2hMLfLmW01BE5LrfGsBgmgBCs987CvN785Ch07HC0uZRsoLbbVCm9IJL56cJzghHFmd2eg9ZyDFV0tPF4+VLSX9rWDtghnljBM7mwg78JNp9ZOxCHcI5cT9qq6eBrz9TPnzk20llVa/Vp6jMVN9wpVBIHzEFy2VO6YK8wvNZ899uNA/eNVsDbJK6+7Av8VKdPPgEmFvuYsEcpd79tmCyhhOGHVf1qO4KQWlr7eVWnIfLt7QnpOrP71gPX0bJ21nErwdQV20VVWhom7/+NBVUhayjNtZn40jKFfqqGDGBO+3pqJIaT27S7hqv2mFb9w6JaXgI63e0bKtF0+A9ek5LInKvb7YbduZzGQ/4Vuz6ciO8nrHBWmk7BDr0aPJlTcn6Mfx4GBDzImXRaO1WPlJJvKTVALhLlQS9nOgM2q6vggCKXoVBVoeggvH9riUUyY6hajGTLVebAy5MtlfaEbe07zPBZVE4AepaI3J7nXPnhHq9jLn/MQa5oTKp0GkAILbgmgCiMQVd31WfXOmdNxxaeWdOSEM/TrgZC5Rd+LYGQ/ghPKHQZTo64uMVE5vAfqNrWpJ2zOb09si+PNWlEtaz6Q79A4UftDUnLS+ZT7odzAnH2WPdmVYVstue3LskNXZ2IyvXcS1GRR0GtmuR5zUN4eMezsY3gnjFLonR9Ozip2RmjjiJ8cz0a3/DHnsTM1DEPL1us68kPY5JUw+iziZKrzh/tDbYN96FcXO/MK+q5qcn+y8HnA1snTYbaW162Umxk4UJaWZRUyZG5Vml2+vRzk2VwoWJb9ATmGoEqZ0ZXF+FKOxAy1p2zsH3X44Wk2Fu4KsLekgLpU3Id8OdX3wP92S+hHY89LlltxoFbQSWfjufF2kjG/MqxoN9fkFF5JlQwcqrl0L+0KeM4fhlbwz0LEjtZgtRoFaXUWQfiqq43a3FssBpH8QSiCVqquTBu9jgVAt09Cu0HYT2l5UskmoDkTnH4s8LMfaaHv0lZjcjuR+7rjDEdmPc2nzzfnLKHS6t5qf6WTzLch7/KXyWnXvXY6G2QMlt+vVGmO1PdqezeV0moccj6Hxdrdvl+qapp9nVP+1lNtEF0qzaCXqi+EmE36CBT4P0N0Sag4kwYzTZehlXRsTPEqMojDZXooUQ/kJQZUXC1qJtL4YSXWQfa2DQqRSmgdcGaM4adgrow2tEG7bGd/voMMlbUb9NicVwunqo/JSrAZmQCMsLW52+MVkGxSeKGOEeyMxh6AL0dtBTwFPVWTDmoqdTFtivhj1OeUTMkqn5DxWUdWHUKKjMtxs7Y88Lkwplj9EPtR6DsHT1mGcf9AfSW7Q9IuVKPkmOdmM3BUUKyKdEwiaHCBdiirRyydCteQX85Nu1GzlaymoCJPGHjGYRH1Ph47dkxZTkwFlzGpinA8R/1U9Iuw24bIZiZOFg5GxlXoZ/qIZcfIdl11H/e4MiJ9k/KMvtXLRnAznEwRhGmmTNb76qASMpPXIQgnr3OY2v8xUSfZi2ew99kGw/Oa1iPm9+OI9iTq6o1DGjNlmh9brWlmWb6OKP+DkzZhNiujVVBRY3xHgxNachNkx1y1P4mQ94iT4v8UgyixKV+duVD+HVoe/uzAZ5iRWbfmM40rrt2sWw9lBe5QVpBO3NcBJsqVA68GAEyv2k3nFSYJ09CqOnVtIDDjxuuM48cZyQsh6oDnJQV7NRZzk6uXS+hrnVEwYbb4FzNeVBEpsuCd+Y7OpnpnLFR1omZTH8RAnydELRX8L0hEnxDqLnTG/lww4uT/gxK55b/ETMs5PdPXX5AT1pycdl5AKv+RyP5N7Hpii7tUGbTrxOtWjyGy0sGzb96Aw4H9EMrZ6OCqJqEvJP9I6yZZPQENO6YljoXV3zChP/KAJK7T2QYFrTvJOuJucLsub9oS68035bG5SmgnKuUer9KJDk9F77TqQYPUzSHUnzx8VCbKo63ajdpRVRn8Vlbzy1+7ItfCI2FIuynyHnONPozT62f0xbbtfiPLJwl1B8S86MGtH/SQn6BdnrJ9YCGRSxEkuNxMsHUPp5RcqM0kwLiCjqBFWqpaaniz4ECbodailfj4FVQeM/nuURoPF0WeCLX4YD0dz2xzzW1qfFKaeJSlH+9EUZb7pSxqHJtx4YuKOuo4W0ElOyOrSYK4WzL7ckmo4DjX+fRYIGaay19AhkXe8XhcTllD5kBopwehLCDLl3U445yvHOZzVrjATHLqMDTsrJ+BDOtvMLjIwMbrvQrN1wOm55VdmsS9ahabWsdDUyGWdTzJOIyvksE8xjH4NnZQzJsdapHMcxXDu52/WuEsxoyBoGdHDBwKGXXDOFt9x93QYYLezkiRSE2Mgjv3XcRuW8orRqkw83SoFn6vR0dA9UL4ay/76P3mFkY14SNJ6hs5v2pd8vzkYtSGoEd1o52nG7olzmodR0bYHPeAIJyrJajNK34PMPN09o/cnbq+50INeJrVgvDy43YyT70uRGBtA7egWw3ixPZXK6r3UyH10OrY5v3DB4dHFPemaC42reKUm9tAItu5TMUQK9f3B1Lp5gJmgsmiftunDzorlzbNZQYKTQ+0nuSC4TdzT+6cgfitPy5vMrVwquwhxczBuc1JebzcRjJj3azpsgLW88xjpsk/iSAbhWN+CrHp6Nercqcfzkzuq+2JyY0FPSQrzrefDdRvJZ614UP0CA1m+lY1HF/nU3DlO+jV7IieWu6hLTi5df8jPfjtHlb/Vg+ri2qUoQQLhlVCXHnDbVMbrLaulWaSWx1W3irp95bl2tAvfuzfYIUvdO2pOr2vPJicYq+1/FcvdfjobV4KlJ8oghv0v5qOx/XzrviSSMcEQE2Tj06g5hAx7oLcPWKgYyYJ8rfFYqBkittTiz2Ovlp/ECWSvh9XSjFrcyaW3XKg56vgIIbzzsqy8Z2aTcnFxOQslRa6cThht2/bsYn+n60rB3e5cv+cNLUDVfvTjyMKYbs8GkUxKlz9fJRwMgjbsdpR6VUyta6+AGN+IJgKQZxc+vUu5xpv7zYW46LRuxQ8TdcMHuuTWGmEvC7paYORne+FRzZnICXXFYlQB00H50RoCX3E56pyk9ewxXS8fb09alf5NMOqvxOED5cdppDzPO/LslHd0pAmpZXQX7zhh0R/sfWQMnlAQRHP7UlBNr29tbW2+nC3HE8l06ftoyZhKOZi8tgqFqYVvb+3v7z//VK8aR27yrRw4uOgfRbFTc5yj6df95eXX00e1Ws3JTOKEcorWgpmZ6NnUq4tfbx1ubT4q3YiWBXNB+U7nUqUHS+r34e5V6GQyg4mjIkJ375B79e6umnfPPa3UiFaou17O6SEjlN5cvV4tB0EQJ950ANpEGwOxxvCrlpo9Tqn/on0F83oFTNNS2DjNjVg5rJOp5fPwbqnQs71GymnkM/nJfmJVKuThUvRsIKvM1qvVcll1FiU1MSjVFzsXGT2eB9qd9pzhkxnnYCuijvqjLbBYL6dHVouVaWBNkHuCTg+mCSxftaYKg0Wu4bXRwnzzLjmdlxDm3nPyA684i1i9JpiK57GJNXTEv6mW4jZ9GNATBt9vv88mPSFfh7Z69/Gk2Pb0zmhfi63K36u5UVLAtplyengBjvqYvWqOoQQcpwlKDg9ih3Efr3ijTwbSy7RTi/udMZxYFf5wqT66lK+k09Ji573OnQnq65Ne4ynxQDOg0Q3FED/84Y3ZBCm5pTtqS8zZrxaY8+fNMWvoC5/6HMrwgD+ppnv9cMSGRvhT1nnQqE3mpEIOf66OUpK+UV3vWJX3aQeZmr9m79khhFAqqol6kVKFjToj6auN+COvgeJD/EdBvRRJSbWUDv5aPj4BNczOy3iova8W1BJplFoLaiW99cM+wRSy9qn/YVAGKNvzPFsduIvXqMNi169F89i2Ogtu/UVxos9IRmQSyPed9UANiHO5aP0aqlB98Ql5vw45AvTJy8XMkefo6pdRSwuel//xVxdPOh+JXXf7799Xg2AmpzJseWn26YkYbZUtvbMfb9wqLLSaTSXoP2u1Fj7d98cqKiR3iupcpjpo5oRH7WWCaFu5CXAiJWim//5rhD8PSUDOt9ePyzrLA2bLuaegVi41Zxuxm1F9YGe3f6/Xbtdq0+1ecaW/6/pqYjVhw5s6ucE7q7f/9vT4+HjxzvrWGkd8DCdQU0CEyYP7r35QuwtefLf/RvAJu7YthrrLK2BCu/3jXlZKRCo1nXntHnBCLF1Jzn9+MkQxIZ0nt19qM54+OtnmnL5X3JwZw7D0IYh8v1LpdiuuBGcW0BZDXzyhyFPsVtQ6E2FdeAEYxitjz/hg+NUUS8mJlL7vM3XhxEOokGLU/k/QQEId9tZTHtVc2EUgiGFyunv2FJWK4JUKh/Lf6XQYpC94Lv8eSiwW7c8dAMXftEZNOId3euv49UObei0ruYFfLfMR1U9pr4z9AFO54+TVYr59Ew92Eo+wQhOGMOsDOGr0bwB4pFDTJXxuNAycKEUJnHiP8Uf3MRvQ9eG56Z/c89oQilYR9CxIJy/LPrJP2WBIdF+3w5TdJ0PDPkgfKKsmj3nb8aT1G4P0Px4wYdmio/Sa7WSxjEuKSm9YFrUyyNv3PrbAEWIn7nScfFaChLRUVaNUyD09ycjXjnY/Mk4o90XvSC9t5R/YuygagRIh+etQd0CZVPv6P0Di94U6ANT19JQxY+e9lawQIPSlu/yTF/el4bJ/3UZeA/Djo8HGz9Br37u5dxMyTCPqQjON4uUnIf/BwH5xMO9rQ6/j2aoRjE4E5FNO9wP48JXfH5KekpJXxzbVB45EW2YzqdrupCNQf3SgykqYz49sylXHVry5j9FJYuAv7XgQPABEjz2d/UidREEQDNLNOzd+DGt7XI7Z+vOxQH10ntxZccLQUxnF9jyv97irPnvyui27XhCBu9n+SrHYK967uZx1zT+9pY/8+NAQ+mpTLkL4A/noiOuFWnr2pfoEGiZ9faLYsEKZVB+5aRF1ktqiiHwgn6hhYGBgYGBgYGBg8CHgEv8O9B8dhpMkDCdJGE6SMJwkYThJwnCShOEkCcNJEoaTJAwnSRhOkjCcJGE4ScJwkoThJAnDSRKGkyQMJ0kYTpIwnCRhOEnCcJKE4SQJw0kShpMkDCdJGE6SMJwkYThJwnCShOEkCcNJEoaTJAwnSRhOkjCcJPH/XLi3ypKQ460AAAAASUVORK5CYII='}}style={{ height:100,width:250,marginTop:10,marginLeft:55}}></Image>
        <View style={styles.enclosure}>
      <Text style={styles.container}>STORE ID-306</Text>
      </View>
      
      <Text style={{fontSize:18,color:'black',marginLeft:10,marginTop:20,paddingLeft:18,paddingRight:18}}>We bring the best of Google to innovative nonprofits that are committed to creating a world that works for everyone.We accelerate the progress of innovative nonprofits by connecting them to the best of Google.As a company, Google's mission is “To organize the world's information and make it universally accessible and useful.” Google dominates 75% of the U.S. online search market. Every month millions of unique users perform billions of searches.</Text>      
      </ScrollView>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => Linking.openURL("https://drive.google.com/file/d/1iBTUvou6yluFTCGfV8Fvg5rBck_rtiaU/view?usp=sharing")}>
        <Image source={{uri:'https://lh5.googleusercontent.com/0ywChJXZWBtH69WyowQjDbMOeHuLbKSf0jt3jwevqwThNws8JVFHV7N8AK1BOc7L-wMsYEMsfpLRlYGOLCshWII-U1Dbs8bkECJBb7s'}}style={{height:60,width:50,marginTop:20,marginLeft:80}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate('Contact')}>
        <Image source={{uri:'https://lh6.googleusercontent.com/XGv7BPNhRekKxLs9Lr8oaSc8-QFvtuGkMyV7k76tZ2tBZMLGnzVSQti1YIWwCcT27n4am4QWBQacAJb5_ibv6qnImioJQ_0M0vNHa4ryZcdpItxbOsR3V3Fvo9eoEK_lTAPfmVpaRxY'}}style={{height:70,width:50,marginTop:15,marginLeft:90,paddingBottom:10}}></Image>
        </TouchableOpacity>
        

        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'bold',height:50,width:90,marginLeft:60}}>CATALOG</Text>
        <Text style={{fontSize:20,fontWeight:'bold',height:40,width:100,marginLeft:55}}>CONTACT</Text>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  enclosure:{
    marginTop:20,
    marginLeft:30,
    marginRight:40,
    borderRadius: 10,
    borderWidth:2,
    borderColor:'#701982ff',

  },
  container: {
    marginTop:10,
    marginLeft:70,
    fontStyle:'italic',
    fontSize:22,
    alignItems:'center',
    justifyContent:'center',
    height:40,
    width:150,
    
  },})