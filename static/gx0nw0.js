/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:28.77
*/
gx.evt.autoSkip = false;
gx.define('gx0nw0', false, function () {
   this.ServerClass =  "gx0nw0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV14pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
      this.AV15pSaidaReboqueSeq=gx.fn.getIntegerValue("vPSAIDAREBOQUESEQ",'.') ;
   };
   this.Validv_Csaidareboqueufveiculo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSAIDAREBOQUEUFVEICULO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cSaidaReboqueUFVeiculo == "" || this.AV9cSaidaReboqueUFVeiculo == "AC" || this.AV9cSaidaReboqueUFVeiculo == "AL" || this.AV9cSaidaReboqueUFVeiculo == "AP" || this.AV9cSaidaReboqueUFVeiculo == "AM" || this.AV9cSaidaReboqueUFVeiculo == "BA" || this.AV9cSaidaReboqueUFVeiculo == "CE" || this.AV9cSaidaReboqueUFVeiculo == "DF" || this.AV9cSaidaReboqueUFVeiculo == "ES" || this.AV9cSaidaReboqueUFVeiculo == "GO" || this.AV9cSaidaReboqueUFVeiculo == "MA" || this.AV9cSaidaReboqueUFVeiculo == "MT" || this.AV9cSaidaReboqueUFVeiculo == "MS" || this.AV9cSaidaReboqueUFVeiculo == "MG" || this.AV9cSaidaReboqueUFVeiculo == "PA" || this.AV9cSaidaReboqueUFVeiculo == "PB" || this.AV9cSaidaReboqueUFVeiculo == "PR" || this.AV9cSaidaReboqueUFVeiculo == "PE" || this.AV9cSaidaReboqueUFVeiculo == "PI" || this.AV9cSaidaReboqueUFVeiculo == "RJ" || this.AV9cSaidaReboqueUFVeiculo == "RN" || this.AV9cSaidaReboqueUFVeiculo == "RS" || this.AV9cSaidaReboqueUFVeiculo == "RO" || this.AV9cSaidaReboqueUFVeiculo == "RR" || this.AV9cSaidaReboqueUFVeiculo == "SC" || this.AV9cSaidaReboqueUFVeiculo == "SP" || this.AV9cSaidaReboqueUFVeiculo == "SE" || this.AV9cSaidaReboqueUFVeiculo == "TO" || this.AV9cSaidaReboqueUFVeiculo == "EX" || (""==this.AV9cSaidaReboqueUFVeiculo) ) )
         {
            try {
               gxballoon.setError("Campo cSaidaReboqueUFVeiculo fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e132g92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142g91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0nw0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4306,53,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,54,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6312,55,"SAIDAREBOQUESEQ","Sequencia","","SaidaReboqueSeq","int",0,"px",2,2,"right",null,[],6312,"SaidaReboqueSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(6295,56,"SAIDAREBOQUEUFVEICULO","UF do veículo","SaidaReboqueUFVeiculo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(6296,57,"SAIDAREBOQUEPLACAVEICULO","Placao Veículo","","SaidaReboquePlacaVeiculo","char",0,"px",8,8,"left",null,[],6296,"SaidaReboquePlacaVeiculo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6297,58,"SAIDAREBOQUERNTC","Registro Nacional de Transportador de Carga","","SaidaReboqueRNTC","svchar",0,"px",20,20,"left",null,[],6297,"SaidaReboqueRNTC",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6298,59,"SAIDAREBOQUEUSUARIOALT","Usuário Alteração","","SaidaReboqueUsuarioAlt","char",0,"px",12,12,"left",null,[],6298,"SaidaReboqueUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAEMPRESAID",gxz:"ZV6cSaidaEmpresaId",gxold:"OV6cSaidaEmpresaId",gxvar:"AV6cSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAEMPRESAID",gx.O.AV6cSaidaEmpresaId,0)},c2v:function(){gx.O.AV6cSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAID",gxz:"ZV7cSaidaId",gxold:"OV7cSaidaId",gxvar:"AV7cSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAID",gx.O.AV7cSaidaId,0)},c2v:function(){gx.O.AV7cSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDAREBOQUESEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAREBOQUESEQ",gxz:"ZV8cSaidaReboqueSeq",gxold:"OV8cSaidaReboqueSeq",gxvar:"AV8cSaidaReboqueSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaReboqueSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSaidaReboqueSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAREBOQUESEQ",gx.O.AV8cSaidaReboqueSeq,0)},c2v:function(){gx.O.AV8cSaidaReboqueSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAREBOQUESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDAREBOQUEUFVEICULO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Csaidareboqueufveiculo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAREBOQUEUFVEICULO",gxz:"ZV9cSaidaReboqueUFVeiculo",gxold:"OV9cSaidaReboqueUFVeiculo",gxvar:"AV9cSaidaReboqueUFVeiculo",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cSaidaReboqueUFVeiculo=Value},v2z:function(Value){gx.O.ZV9cSaidaReboqueUFVeiculo=Value},v2c:function(){gx.fn.setComboBoxValue("vCSAIDAREBOQUEUFVEICULO",gx.O.AV9cSaidaReboqueUFVeiculo)},c2v:function(){gx.O.AV9cSaidaReboqueUFVeiculo=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAREBOQUEUFVEICULO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDAREBOQUEPLACAVEICULO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAREBOQUEPLACAVEICULO",gxz:"ZV10cSaidaReboquePlacaVeiculo",gxold:"OV10cSaidaReboquePlacaVeiculo",gxvar:"AV10cSaidaReboquePlacaVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaReboquePlacaVeiculo=Value},v2z:function(Value){gx.O.ZV10cSaidaReboquePlacaVeiculo=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAREBOQUEPLACAVEICULO",gx.O.AV10cSaidaReboquePlacaVeiculo,0)},c2v:function(){gx.O.AV10cSaidaReboquePlacaVeiculo=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAREBOQUEPLACAVEICULO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAREBOQUERNTC", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAREBOQUERNTC",gxz:"ZV11cSaidaReboqueRNTC",gxold:"OV11cSaidaReboqueRNTC",gxvar:"AV11cSaidaReboqueRNTC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSaidaReboqueRNTC=Value},v2z:function(Value){gx.O.ZV11cSaidaReboqueRNTC=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAREBOQUERNTC",gx.O.AV11cSaidaReboqueRNTC,0)},c2v:function(){gx.O.AV11cSaidaReboqueRNTC=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAREBOQUERNTC")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAREBOQUEUSUARIOALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAREBOQUEUSUARIOALT",gxz:"ZV12cSaidaReboqueUsuarioAlt",gxold:"OV12cSaidaReboqueUsuarioAlt",gxvar:"AV12cSaidaReboqueUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSaidaReboqueUsuarioAlt=Value},v2z:function(Value){gx.O.ZV12cSaidaReboqueUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAREBOQUEUSUARIOALT",gx.O.AV12cSaidaReboqueUsuarioAlt,0)},c2v:function(){gx.O.AV12cSaidaReboqueUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAREBOQUEUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUESEQ",gxz:"Z6312SaidaReboqueSeq",gxold:"O6312SaidaReboqueSeq",gxvar:"A6312SaidaReboqueSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6312SaidaReboqueSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6312SaidaReboqueSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAREBOQUESEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A6312SaidaReboqueSeq,0)},c2v:function(){gx.O.A6312SaidaReboqueSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAREBOQUESEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEUFVEICULO",gxz:"Z6295SaidaReboqueUFVeiculo",gxold:"O6295SaidaReboqueUFVeiculo",gxvar:"A6295SaidaReboqueUFVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6295SaidaReboqueUFVeiculo=Value},v2z:function(Value){gx.O.Z6295SaidaReboqueUFVeiculo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDAREBOQUEUFVEICULO",row || gx.fn.currentGridRowImpl(51),gx.O.A6295SaidaReboqueUFVeiculo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6295SaidaReboqueUFVeiculo=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAREBOQUEUFVEICULO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:8,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEPLACAVEICULO",gxz:"Z6296SaidaReboquePlacaVeiculo",gxold:"O6296SaidaReboquePlacaVeiculo",gxvar:"A6296SaidaReboquePlacaVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6296SaidaReboquePlacaVeiculo=Value},v2z:function(Value){gx.O.Z6296SaidaReboquePlacaVeiculo=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAREBOQUEPLACAVEICULO",row || gx.fn.currentGridRowImpl(51),gx.O.A6296SaidaReboquePlacaVeiculo,0)},c2v:function(){gx.O.A6296SaidaReboquePlacaVeiculo=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAREBOQUEPLACAVEICULO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUERNTC",gxz:"Z6297SaidaReboqueRNTC",gxold:"O6297SaidaReboqueRNTC",gxvar:"A6297SaidaReboqueRNTC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6297SaidaReboqueRNTC=Value},v2z:function(Value){gx.O.Z6297SaidaReboqueRNTC=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAREBOQUERNTC",row || gx.fn.currentGridRowImpl(51),gx.O.A6297SaidaReboqueRNTC,0)},c2v:function(){gx.O.A6297SaidaReboqueRNTC=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAREBOQUERNTC",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEUSUARIOALT",gxz:"Z6298SaidaReboqueUsuarioAlt",gxold:"O6298SaidaReboqueUsuarioAlt",gxvar:"A6298SaidaReboqueUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6298SaidaReboqueUsuarioAlt=Value},v2z:function(Value){gx.O.Z6298SaidaReboqueUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAREBOQUEUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A6298SaidaReboqueUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6298SaidaReboqueUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAREBOQUEUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cSaidaEmpresaId = "" ;
   this.ZV6cSaidaEmpresaId = "" ;
   this.OV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.ZV7cSaidaId = 0 ;
   this.OV7cSaidaId = 0 ;
   this.AV8cSaidaReboqueSeq = 0 ;
   this.ZV8cSaidaReboqueSeq = 0 ;
   this.OV8cSaidaReboqueSeq = 0 ;
   this.AV9cSaidaReboqueUFVeiculo = "" ;
   this.ZV9cSaidaReboqueUFVeiculo = "" ;
   this.OV9cSaidaReboqueUFVeiculo = "" ;
   this.AV10cSaidaReboquePlacaVeiculo = "" ;
   this.ZV10cSaidaReboquePlacaVeiculo = "" ;
   this.OV10cSaidaReboquePlacaVeiculo = "" ;
   this.AV11cSaidaReboqueRNTC = "" ;
   this.ZV11cSaidaReboqueRNTC = "" ;
   this.OV11cSaidaReboqueRNTC = "" ;
   this.AV12cSaidaReboqueUsuarioAlt = "" ;
   this.ZV12cSaidaReboqueUsuarioAlt = "" ;
   this.OV12cSaidaReboqueUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.Z6312SaidaReboqueSeq = 0 ;
   this.O6312SaidaReboqueSeq = 0 ;
   this.Z6295SaidaReboqueUFVeiculo = "" ;
   this.O6295SaidaReboqueUFVeiculo = "" ;
   this.Z6296SaidaReboquePlacaVeiculo = "" ;
   this.O6296SaidaReboquePlacaVeiculo = "" ;
   this.Z6297SaidaReboqueRNTC = "" ;
   this.O6297SaidaReboqueRNTC = "" ;
   this.Z6298SaidaReboqueUsuarioAlt = "" ;
   this.O6298SaidaReboqueUsuarioAlt = "" ;
   this.AV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.AV8cSaidaReboqueSeq = 0 ;
   this.AV9cSaidaReboqueUFVeiculo = "" ;
   this.AV10cSaidaReboquePlacaVeiculo = "" ;
   this.AV11cSaidaReboqueRNTC = "" ;
   this.AV12cSaidaReboqueUsuarioAlt = "" ;
   this.AV13pSaidaEmpresaId = "" ;
   this.AV14pSaidaId = 0 ;
   this.AV15pSaidaReboqueSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A6312SaidaReboqueSeq = 0 ;
   this.A6295SaidaReboqueUFVeiculo = "" ;
   this.A6296SaidaReboquePlacaVeiculo = "" ;
   this.A6297SaidaReboqueRNTC = "" ;
   this.A6298SaidaReboqueUsuarioAlt = "" ;
   this.Events = {"e132g92_client": ["ENTER", true] ,"e142g91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaReboqueSeq',fld:'vCSAIDAREBOQUESEQ'},{av:'AV9cSaidaReboqueUFVeiculo',fld:'vCSAIDAREBOQUEUFVEICULO'},{av:'AV10cSaidaReboquePlacaVeiculo',fld:'vCSAIDAREBOQUEPLACAVEICULO'},{av:'AV11cSaidaReboqueRNTC',fld:'vCSAIDAREBOQUERNTC'},{av:'AV12cSaidaReboqueUsuarioAlt',fld:'vCSAIDAREBOQUEUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A6312SaidaReboqueSeq',fld:'SAIDAREBOQUESEQ'}],[{av:'AV13pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID'},{av:'AV14pSaidaId',fld:'vPSAIDAID'},{av:'AV15pSaidaReboqueSeq',fld:'vPSAIDAREBOQUESEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaReboqueSeq',fld:'vCSAIDAREBOQUESEQ'},{av:'AV9cSaidaReboqueUFVeiculo',fld:'vCSAIDAREBOQUEUFVEICULO'},{av:'AV10cSaidaReboquePlacaVeiculo',fld:'vCSAIDAREBOQUEPLACAVEICULO'},{av:'AV11cSaidaReboqueRNTC',fld:'vCSAIDAREBOQUERNTC'},{av:'AV12cSaidaReboqueUsuarioAlt',fld:'vCSAIDAREBOQUEUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaReboqueSeq',fld:'vCSAIDAREBOQUESEQ'},{av:'AV9cSaidaReboqueUFVeiculo',fld:'vCSAIDAREBOQUEUFVEICULO'},{av:'AV10cSaidaReboquePlacaVeiculo',fld:'vCSAIDAREBOQUEPLACAVEICULO'},{av:'AV11cSaidaReboqueRNTC',fld:'vCSAIDAREBOQUERNTC'},{av:'AV12cSaidaReboqueUsuarioAlt',fld:'vCSAIDAREBOQUEUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaReboqueSeq',fld:'vCSAIDAREBOQUESEQ'},{av:'AV9cSaidaReboqueUFVeiculo',fld:'vCSAIDAREBOQUEUFVEICULO'},{av:'AV10cSaidaReboquePlacaVeiculo',fld:'vCSAIDAREBOQUEPLACAVEICULO'},{av:'AV11cSaidaReboqueRNTC',fld:'vCSAIDAREBOQUERNTC'},{av:'AV12cSaidaReboqueUsuarioAlt',fld:'vCSAIDAREBOQUEUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaReboqueSeq',fld:'vCSAIDAREBOQUESEQ'},{av:'AV9cSaidaReboqueUFVeiculo',fld:'vCSAIDAREBOQUEUFVEICULO'},{av:'AV10cSaidaReboquePlacaVeiculo',fld:'vCSAIDAREBOQUEPLACAVEICULO'},{av:'AV11cSaidaReboqueRNTC',fld:'vCSAIDAREBOQUERNTC'},{av:'AV12cSaidaReboqueUsuarioAlt',fld:'vCSAIDAREBOQUEUSUARIOALT'}],[]];
   this.setVCMap("AV13pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV15pSaidaReboqueSeq", "vPSAIDAREBOQUESEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0nw0());
