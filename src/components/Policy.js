"use strict";
var React = require("react/addons");

module.exports = React.createClass({
  displayName: "Policy",

  getInitialState () {
    return {
      hideContent: true
    };
  },

  _handleClick () {
    this.setState({
      hideContent: !this.state.hideContent
    });
  },

  render () {
    return this._render(this.props, this.state);
  },

  _render (props, state) {
    var {title, plain_content, content} = props.data;
    // var content = '<p>我今提出動物保護政策，主張全面朝向零安樂死，不撲殺任何一隻健康犬貓，並推動寵物履歷及遠端認養等機制，期許台北市不僅成為友善動物城市，更讓城市中所有生命都不再流淚，有個溫暖的家。</p><p>我提出，「零安樂，不撲殺！」，未來規劃將動物收容所轉型為動物中途之家，透過擴大積極認養及與民間動保組織合作設置安養所等方式，全面朝向零安樂死的目標邁進，不撲殺任何一隻健康的犬貓，也不因收容空間不足而對犬貓執行安樂死！</p><p><strong>給牠們快樂的家！推動公辦民營「動物友善生活村」及遠端認養機制</strong></p><p>導入民間的專業、活力與熱忱，連勝文規劃，未來與民間動保團體或慈善團體合作經營動物之家，以公辦民營方式運作，打造動物友善生活村為目標，將軟硬體設備全面升級，也開辦各項收費課程，使能自闢財源，並成為親子寓教於樂的場地，同時透過開辦課程服務的財源，提升設施品質、增加收容空間。</p><p>我也提出，將與民間共同推動遠端認養機制。對於有心認養但居住條件不允許的市民，開放遠端認養，可按月捐助費用，供給特定或不特定之流浪動物。認養人可透過遠端系統觀察所認養動物的日常活動與生活環境，也可來參與認養動物的洗澡、運動、或空間美化等等。</p><p><strong>給牠們快樂生活! 推動多元出養及寵物友善店家標章</strong></p><p>我們並規劃多元出養管道，除了一般家庭領養之外，為學校、老人之家、派出所、企業分別設計校園犬、警局犬、公司犬的飼養照顧方案和獎勵措施，提高送養率。未來市府並將輔導店家建立寵物友善環境，例如在餐廳設立專區讓飼主可與寵物一同用餐（須有實體區隔而不會影響一般用餐民眾）、購物商場需提供寵物攜行推車、旅館提供寵物床組服務等，商家符合相關規格後，市府將頒發寵物友善店家標章，讓台北市邁向寵物友善城市。</p><p><strong>落實源頭管理！推動寵物履及飼主教育講習、三日冷靜期</strong></p><p>我提出，未來將規定寵物買賣業者必須公佈販售犬貓所屬的繁殖場及繁殖場評鑑成績、健康資訊，甚至是遺傳病史等充分揭露資訊，藉以扼阻不法犬貓繁殖，此外，亦將委託動保組織及專業獸醫協助北市寵物買賣業的稽查。</p><p>為了避免市民因櫥窗瀏覽而衝動購買，買後又無力飼養、造成棄養，我提出，台北市寵物店家須提供飼養需知，供民眾審慎評估。並推動飼主購買寵物前的講習，對於飼主做充分的責任教育，並限定在確認購買意願繳交訂金後，至少應經過三日的冷靜期，才能帶回飼養。</p><p>我們希望，「未來的台北市，不再有暗夜在街頭巷尾徘迴的身影，不再有倒數生命的眼淚，每個生命，都能快樂生活。」</p>';
    var contentClass = (state.hideContent)? 'p_fullcontent_hide': '';
    var toggleIcon = (state.hideContent)? 'fa fa-angle-double-down': 'fa fa-angle-double-up';
    var togglePreview = (state.hideContent)? (<div className='p_preview'>
        {plain_content}
        <span className='p_seeall' onClick={this._handleClick}>{'（繼續閱讀）'}</span>
      </div>) : '';

    return <div className='md-whiteframe-z1 p_item'>
      <div className='p_title' onClick={this._handleClick}>
        {title}
        <div className='p_actionicon l_inline'>
          <i className={toggleIcon}></i>
        </div>
      </div>
      {togglePreview}
      <div className={contentClass} dangerouslySetInnerHTML={{__html: content}} onDoubleClick={this._handleClick}/>
      <div className='l_center'>
      </div>
    </div>;

  }

});
