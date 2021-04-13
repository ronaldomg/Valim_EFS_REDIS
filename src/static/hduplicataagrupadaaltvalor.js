/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:36:35.61
*/
gx.evt.autoSkip = false;
gx.define('hduplicataagrupadaaltvalor', false, function () {
   this.ServerClass =  "hduplicataagrupadaaltvalor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV31ValorTotalParm=gx.fn.getDecimalValue("vVALORTOTALPARM",'.',',') ;
   };
   this.s112_client=function()
   {
      this.AV26SnErro =  "N"  ;
      if ( (0.0==this.AV30ValorTotal) )
      {
         this.addMessage("Informe o valor total da duplicata");
         gx.fn.usrSetFocus("vVALORTOTAL") ;
         this.AV26SnErro =  "S"  ;
      }
   };
   this.e122442_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132442_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152442_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTAL",gxz:"ZV30ValorTotal",gxold:"OV30ValorTotal",gxvar:"AV30ValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30ValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTAL",gx.O.AV30ValorTotal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30ValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 10 , function() {
   });
   GXValidFnc[18]={fld:"JS", format:2,grid:0};
   this.AV30ValorTotal = 0 ;
   this.ZV30ValorTotal = 0 ;
   this.OV30ValorTotal = 0 ;
   this.AV30ValorTotal = 0 ;
   this.AV31ValorTotalParm = 0 ;
   this.AV26SnErro = "" ;
   this.Events = {"e122442_client": ["ENTER", true] ,"e132442_client": ["'FECHAR'", true] ,"e152442_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV30ValorTotal',fld:'vVALORTOTAL'}],[{av:'AV26SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV31ValorTotalParm", "vVALORTOTALPARM", 0, "decimal");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hduplicataagrupadaaltvalor());
