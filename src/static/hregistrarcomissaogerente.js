/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:41:43.66
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcomissaogerente', false, function () {
   this.ServerClass =  "hregistrarcomissaogerente" ;
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
      this.AV5UsrCod=gx.fn.getControlValue("vUSRCOD") ;
   };
   this.Validv_Comissaogerenteempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOGERENTEEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      this.AV17ComissaoGerenteValorInicial =  0  ;
      this.AV18ComissaoGerenteValorFinal =  0  ;
      this.AV19ComissaoGerentePercentual =  0  ;
      this.AV16ComissaoGerenteSeq = gx.num.trunc( 0 ,0) ;
   };
   this.e111fb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121fb2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161fb2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e131fb2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e191fb2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e141fb2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e201fb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,25,27,34,36,37,38,39,40,41,42,43,50,52,53];
   this.GXLastCtrlId =53;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",35,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarcomissaogerente",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(9288,36,"COMISSAOGERENTEVALORINICIAL","Valor Inicial","","ComissaoGerenteValorInicial","decimal",0,"px",22,22,"right",null,[],9288,"ComissaoGerenteValorInicial",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9289,37,"COMISSAOGERENTEVALORFINAL","Valor Final","","ComissaoGerenteValorFinal","decimal",0,"px",22,22,"right",null,[],9289,"ComissaoGerenteValorFinal",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9290,38,"COMISSAOGERENTEPERCENTUAL","Perc.","","ComissaoGerentePercentual","decimal",0,"px",22,22,"right",null,[],9290,"ComissaoGerentePercentual",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9293,39,"COMISSAOGERENTEEMPRESAID","Empresa Id","","ComissaoGerenteEmpresaId","char",0,"px",10,10,"left",null,[],9293,"ComissaoGerenteEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9294,40,"COMISSAOGERENTESEQ","Sequencia","","ComissaoGerenteSeq","int",0,"px",6,6,"right",null,[],9294,"ComissaoGerenteSeq",false,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",41,0,"px",17,"px","e191fb2_client","","Alt","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",42,0,"px",17,"px","e161fb2_client","","Exc","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOGERENTEVALORINICIAL",gxz:"ZV17ComissaoGerenteValorInicial",gxold:"OV17ComissaoGerenteValorInicial",gxvar:"AV17ComissaoGerenteValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV17ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOGERENTEVALORINICIAL",gx.O.AV17ComissaoGerenteValorInicial,2,',')},c2v:function(){gx.O.AV17ComissaoGerenteValorInicial=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOGERENTEVALORINICIAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOGERENTEVALORFINAL",gxz:"ZV18ComissaoGerenteValorFinal",gxold:"OV18ComissaoGerenteValorFinal",gxvar:"AV18ComissaoGerenteValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV18ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOGERENTEVALORFINAL",gx.O.AV18ComissaoGerenteValorFinal,2,',')},c2v:function(){gx.O.AV18ComissaoGerenteValorFinal=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOGERENTEVALORFINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOGERENTEPERCENTUAL",gxz:"ZV19ComissaoGerentePercentual",gxold:"OV19ComissaoGerentePercentual",gxvar:"AV19ComissaoGerentePercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ComissaoGerentePercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19ComissaoGerentePercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOGERENTEPERCENTUAL",gx.O.AV19ComissaoGerentePercentual,2,',')},c2v:function(){gx.O.AV19ComissaoGerentePercentual=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOGERENTEPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[36]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEVALORINICIAL",gxz:"Z9288ComissaoGerenteValorInicial",gxold:"O9288ComissaoGerenteValorInicial",gxvar:"A9288ComissaoGerenteValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9288ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9288ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOGERENTEVALORINICIAL",row || gx.fn.currentGridRowImpl(35),gx.O.A9288ComissaoGerenteValorInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9288ComissaoGerenteValorInicial=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOGERENTEVALORINICIAL",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEVALORFINAL",gxz:"Z9289ComissaoGerenteValorFinal",gxold:"O9289ComissaoGerenteValorFinal",gxvar:"A9289ComissaoGerenteValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9289ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9289ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOGERENTEVALORFINAL",row || gx.fn.currentGridRowImpl(35),gx.O.A9289ComissaoGerenteValorFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9289ComissaoGerenteValorFinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOGERENTEVALORFINAL",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEPERCENTUAL",gxz:"Z9290ComissaoGerentePercentual",gxold:"O9290ComissaoGerentePercentual",gxvar:"A9290ComissaoGerentePercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9290ComissaoGerentePercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9290ComissaoGerentePercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOGERENTEPERCENTUAL",row || gx.fn.currentGridRowImpl(35),gx.O.A9290ComissaoGerentePercentual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9290ComissaoGerentePercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOGERENTEPERCENTUAL",row || gx.fn.currentGridRowImpl(35),'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEEMPRESAID",gxz:"Z9293ComissaoGerenteEmpresaId",gxold:"O9293ComissaoGerenteEmpresaId",gxvar:"A9293ComissaoGerenteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9293ComissaoGerenteEmpresaId=Value},v2z:function(Value){gx.O.Z9293ComissaoGerenteEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("COMISSAOGERENTEEMPRESAID",row || gx.fn.currentGridRowImpl(35),gx.O.A9293ComissaoGerenteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9293ComissaoGerenteEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("COMISSAOGERENTEEMPRESAID",row || gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTESEQ",gxz:"Z9294ComissaoGerenteSeq",gxold:"O9294ComissaoGerenteSeq",gxvar:"A9294ComissaoGerenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9294ComissaoGerenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9294ComissaoGerenteSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOGERENTESEQ",row || gx.fn.currentGridRowImpl(35),gx.O.A9294ComissaoGerenteSeq,0)},c2v:function(){gx.O.A9294ComissaoGerenteSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("COMISSAOGERENTESEQ",row || gx.fn.currentGridRowImpl(35),'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV13bmpAlt",gxold:"OV13bmpAlt",gxvar:"AV13bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV13bmpAlt=Value},v2z:function(Value){gx.O.ZV13bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(35),gx.O.AV13bmpAlt,gx.O.AV27Bmpalt_GXI)},c2v:function(){gx.O.AV27Bmpalt_GXI=this.val_GXI();gx.O.AV13bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV27Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV14bmpExc",gxold:"OV14bmpExc",gxvar:"AV14bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14bmpExc=Value},v2z:function(Value){gx.O.ZV14bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(35),gx.O.AV14bmpExc,gx.O.AV28Bmpexc_GXI)},c2v:function(){gx.O.AV28Bmpexc_GXI=this.val_GXI();gx.O.AV14bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(35))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(35))}, gxvar_GXI:'AV28Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[43]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaogerenteempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOMISSAOGERENTEEMPRESAID",gxz:"ZV15ComissaoGerenteEmpresaId",gxold:"OV15ComissaoGerenteEmpresaId",gxvar:"AV15ComissaoGerenteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ComissaoGerenteEmpresaId=Value},v2z:function(Value){gx.O.ZV15ComissaoGerenteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCOMISSAOGERENTEEMPRESAID",gx.O.AV15ComissaoGerenteEmpresaId,0)},c2v:function(){gx.O.AV15ComissaoGerenteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCOMISSAOGERENTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"JS", format:2,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOGERENTESEQ",gxz:"ZV16ComissaoGerenteSeq",gxold:"OV16ComissaoGerenteSeq",gxvar:"AV16ComissaoGerenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ComissaoGerenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ComissaoGerenteSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOGERENTESEQ",gx.O.AV16ComissaoGerenteSeq,0)},c2v:function(){gx.O.AV16ComissaoGerenteSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOGERENTESEQ",'.')},nac:gx.falseFn};
   this.AV17ComissaoGerenteValorInicial = 0 ;
   this.ZV17ComissaoGerenteValorInicial = 0 ;
   this.OV17ComissaoGerenteValorInicial = 0 ;
   this.AV18ComissaoGerenteValorFinal = 0 ;
   this.ZV18ComissaoGerenteValorFinal = 0 ;
   this.OV18ComissaoGerenteValorFinal = 0 ;
   this.AV19ComissaoGerentePercentual = 0 ;
   this.ZV19ComissaoGerentePercentual = 0 ;
   this.OV19ComissaoGerentePercentual = 0 ;
   this.Z9288ComissaoGerenteValorInicial = 0 ;
   this.O9288ComissaoGerenteValorInicial = 0 ;
   this.Z9289ComissaoGerenteValorFinal = 0 ;
   this.O9289ComissaoGerenteValorFinal = 0 ;
   this.Z9290ComissaoGerentePercentual = 0 ;
   this.O9290ComissaoGerentePercentual = 0 ;
   this.Z9293ComissaoGerenteEmpresaId = "" ;
   this.O9293ComissaoGerenteEmpresaId = "" ;
   this.Z9294ComissaoGerenteSeq = 0 ;
   this.O9294ComissaoGerenteSeq = 0 ;
   this.ZV13bmpAlt = "" ;
   this.OV13bmpAlt = "" ;
   this.ZV14bmpExc = "" ;
   this.OV14bmpExc = "" ;
   this.AV15ComissaoGerenteEmpresaId = "" ;
   this.ZV15ComissaoGerenteEmpresaId = "" ;
   this.OV15ComissaoGerenteEmpresaId = "" ;
   this.AV16ComissaoGerenteSeq = 0 ;
   this.ZV16ComissaoGerenteSeq = 0 ;
   this.OV16ComissaoGerenteSeq = 0 ;
   this.AV17ComissaoGerenteValorInicial = 0 ;
   this.AV18ComissaoGerenteValorFinal = 0 ;
   this.AV19ComissaoGerentePercentual = 0 ;
   this.AV15ComissaoGerenteEmpresaId = "" ;
   this.AV16ComissaoGerenteSeq = 0 ;
   this.A9288ComissaoGerenteValorInicial = 0 ;
   this.A9289ComissaoGerenteValorFinal = 0 ;
   this.A9290ComissaoGerentePercentual = 0 ;
   this.A9293ComissaoGerenteEmpresaId = "" ;
   this.A9294ComissaoGerenteSeq = 0 ;
   this.AV13bmpAlt = "" ;
   this.AV14bmpExc = "" ;
   this.AV5UsrCod = "" ;
   this.Events = {"e111fb2_client": ["ENTER", true] ,"e121fb2_client": ["'FECHAR'", true] ,"e161fb2_client": ["'EXCLUIR'", true] ,"e131fb2_client": ["'CONFIRMAR'", true] ,"e191fb2_client": ["'ALTERAR'", true] ,"e141fb2_client": ["'CANCELAR'", true] ,"e201fb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV13bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV14bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV15ComissaoGerenteEmpresaId',fld:'vCOMISSAOGERENTEEMPRESAID'},{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV15ComissaoGerenteEmpresaId',fld:'vCOMISSAOGERENTEEMPRESAID'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A9288ComissaoGerenteValorInicial',fld:'COMISSAOGERENTEVALORINICIAL'},{av:'A9289ComissaoGerenteValorFinal',fld:'COMISSAOGERENTEVALORFINAL'},{av:'A9293ComissaoGerenteEmpresaId',fld:'COMISSAOGERENTEEMPRESAID'}],[{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15ComissaoGerenteEmpresaId',fld:'vCOMISSAOGERENTEEMPRESAID'},{av:'AV13bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV14bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A9294ComissaoGerenteSeq',fld:'COMISSAOGERENTESEQ'}],[{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{av:'AV22Msgm',fld:'vMSGM'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A9288ComissaoGerenteValorInicial',fld:'COMISSAOGERENTEVALORINICIAL'},{av:'A9289ComissaoGerenteValorFinal',fld:'COMISSAOGERENTEVALORFINAL'},{av:'A9290ComissaoGerentePercentual',fld:'COMISSAOGERENTEPERCENTUAL'},{av:'A9294ComissaoGerenteSeq',fld:'COMISSAOGERENTESEQ'}],[{av:'gx.fn.getCtrlProperty("vCOMISSAOGERENTEVALORINICIAL","Enabled")',ctrl:'vCOMISSAOGERENTEVALORINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOGERENTEVALORFINAL","Enabled")',ctrl:'vCOMISSAOGERENTEVALORFINAL',prop:'Enabled'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{ctrl:'INSERIR',prop:'Visible'},{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'CONFIRMAR',prop:'Visible'}]];
   this.EvtParms["'CANCELAR'"] = [[],[{ctrl:'INSERIR',prop:'Visible'},{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'CONFIRMAR',prop:'Visible'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV15ComissaoGerenteEmpresaId',fld:'vCOMISSAOGERENTEEMPRESAID'},{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'},{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true}],[{av:'AV17ComissaoGerenteValorInicial',fld:'vCOMISSAOGERENTEVALORINICIAL'},{av:'AV18ComissaoGerenteValorFinal',fld:'vCOMISSAOGERENTEVALORFINAL'},{av:'AV19ComissaoGerentePercentual',fld:'vCOMISSAOGERENTEPERCENTUAL'},{av:'AV16ComissaoGerenteSeq',fld:'vCOMISSAOGERENTESEQ'}]];
   this.EnterCtrl = ["INSERIR"];
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[50]);
   Grid1Container.addRefreshingVar({rfrVar:"AV13bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV14bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[53]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[17]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[22]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[27]);
   Grid1Container.addRefreshingVar({rfrVar:"AV5UsrCod"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcomissaogerente());
