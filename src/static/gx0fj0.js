/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:3.51
*/
gx.evt.autoSkip = false;
gx.define('gx0fj0', false, function () {
   this.ServerClass =  "gx0fj0" ;
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
      this.AV12pFilialSTEmpresaId=gx.fn.getControlValue("vPFILIALSTEMPRESAID") ;
      this.AV13pFilialSTFilialId=gx.fn.getIntegerValue("vPFILIALSTFILIALID",'.') ;
      this.AV14pFilialSTUF=gx.fn.getControlValue("vPFILIALSTUF") ;
   };
   this.Validv_Cfilialstuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCFILIALSTUF");
         this.AnyError  = 0;
         if ( ! ( this.AV8cFilialSTUF == "" || this.AV8cFilialSTUF == "AC" || this.AV8cFilialSTUF == "AL" || this.AV8cFilialSTUF == "AP" || this.AV8cFilialSTUF == "AM" || this.AV8cFilialSTUF == "BA" || this.AV8cFilialSTUF == "CE" || this.AV8cFilialSTUF == "DF" || this.AV8cFilialSTUF == "ES" || this.AV8cFilialSTUF == "GO" || this.AV8cFilialSTUF == "MA" || this.AV8cFilialSTUF == "MT" || this.AV8cFilialSTUF == "MS" || this.AV8cFilialSTUF == "MG" || this.AV8cFilialSTUF == "PA" || this.AV8cFilialSTUF == "PB" || this.AV8cFilialSTUF == "PR" || this.AV8cFilialSTUF == "PE" || this.AV8cFilialSTUF == "PI" || this.AV8cFilialSTUF == "RJ" || this.AV8cFilialSTUF == "RN" || this.AV8cFilialSTUF == "RS" || this.AV8cFilialSTUF == "RO" || this.AV8cFilialSTUF == "RR" || this.AV8cFilialSTUF == "SC" || this.AV8cFilialSTUF == "SP" || this.AV8cFilialSTUF == "SE" || this.AV8cFilialSTUF == "TO" || this.AV8cFilialSTUF == "EX" || (""==this.AV8cFilialSTUF) ) )
         {
            try {
               gxballoon.setError("Campo cFilialSTUF fora do intervalo");
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
   this.e131tw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141tw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fj0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7222,48,"FILIALSTEMPRESAID","Empresa Filial","","FilialSTEmpresaId","char",0,"px",10,10,"left",null,[],7222,"FilialSTEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7223,49,"FILIALSTFILIALID","Filial","","FilialSTFilialId","int",0,"px",7,7,"right",null,[],7223,"FilialSTFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(7224,50,"FILIALSTUF","UF","FilialSTUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(7219,51,"FILIALSTINSCESTADUAL","Inscrição Estadual","","FilialSTInscEstadual","svchar",0,"px",18,18,"left",null,[],7219,"FilialSTInscEstadual",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7220,52,"FILIALSTUSUALTERACAO","Usuário Alteração","","FilialSTUsuAlteracao","char",0,"px",12,12,"left",null,[],7220,"FilialSTUsuAlteracao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7221,53,"FILIALSTDATAHORAALT","Data/Hora Alteração","","FilialSTDataHoraAlt","dtime",0,"px",16,16,"right",null,[],7221,"FilialSTDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFILIALSTEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALSTEMPRESAID",gxz:"ZV6cFilialSTEmpresaId",gxold:"OV6cFilialSTEmpresaId",gxvar:"AV6cFilialSTEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFilialSTEmpresaId=Value},v2z:function(Value){gx.O.ZV6cFilialSTEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFILIALSTEMPRESAID",gx.O.AV6cFilialSTEmpresaId,0)},c2v:function(){gx.O.AV6cFilialSTEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALSTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALSTFILIALID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALSTFILIALID",gxz:"ZV7cFilialSTFilialId",gxold:"OV7cFilialSTFilialId",gxvar:"AV7cFilialSTFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialSTFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFilialSTFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALSTFILIALID",gx.O.AV7cFilialSTFilialId,0)},c2v:function(){gx.O.AV7cFilialSTFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALSTFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFILIALSTUF", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cfilialstuf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALSTUF",gxz:"ZV8cFilialSTUF",gxold:"OV8cFilialSTUF",gxvar:"AV8cFilialSTUF",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cFilialSTUF=Value},v2z:function(Value){gx.O.ZV8cFilialSTUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCFILIALSTUF",gx.O.AV8cFilialSTUF)},c2v:function(){gx.O.AV8cFilialSTUF=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALSTUF")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFILIALSTINSCESTADUAL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALSTINSCESTADUAL",gxz:"ZV9cFilialSTInscEstadual",gxold:"OV9cFilialSTInscEstadual",gxvar:"AV9cFilialSTInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cFilialSTInscEstadual=Value},v2z:function(Value){gx.O.ZV9cFilialSTInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vCFILIALSTINSCESTADUAL",gx.O.AV9cFilialSTInscEstadual,0)},c2v:function(){gx.O.AV9cFilialSTInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALSTINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFILIALSTUSUALTERACAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALSTUSUALTERACAO",gxz:"ZV10cFilialSTUsuAlteracao",gxold:"OV10cFilialSTUsuAlteracao",gxvar:"AV10cFilialSTUsuAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cFilialSTUsuAlteracao=Value},v2z:function(Value){gx.O.ZV10cFilialSTUsuAlteracao=Value},v2c:function(){gx.fn.setControlValue("vCFILIALSTUSUALTERACAO",gx.O.AV10cFilialSTUsuAlteracao,0)},c2v:function(){gx.O.AV10cFilialSTUsuAlteracao=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALSTUSUALTERACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFILIALSTDATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALSTDATAHORAALT",gxz:"ZV11cFilialSTDataHoraAlt",gxold:"OV11cFilialSTDataHoraAlt",gxvar:"AV11cFilialSTDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFilialSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cFilialSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALSTDATAHORAALT",gx.O.AV11cFilialSTDataHoraAlt,0)},c2v:function(){gx.O.AV11cFilialSTDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCFILIALSTDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSTEMPRESAID",gxz:"Z7222FilialSTEmpresaId",gxold:"O7222FilialSTEmpresaId",gxvar:"A7222FilialSTEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7222FilialSTEmpresaId=Value},v2z:function(Value){gx.O.Z7222FilialSTEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALSTEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A7222FilialSTEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7222FilialSTEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALSTEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSTFILIALID",gxz:"Z7223FilialSTFilialId",gxold:"O7223FilialSTFilialId",gxvar:"A7223FilialSTFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7223FilialSTFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7223FilialSTFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALSTFILIALID",row || gx.fn.currentGridRowImpl(46),gx.O.A7223FilialSTFilialId,0)},c2v:function(){gx.O.A7223FilialSTFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALSTFILIALID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSTUF",gxz:"Z7224FilialSTUF",gxold:"O7224FilialSTUF",gxvar:"A7224FilialSTUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A7224FilialSTUF=Value},v2z:function(Value){gx.O.Z7224FilialSTUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("FILIALSTUF",row || gx.fn.currentGridRowImpl(46),gx.O.A7224FilialSTUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7224FilialSTUF=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALSTUF",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSTINSCESTADUAL",gxz:"Z7219FilialSTInscEstadual",gxold:"O7219FilialSTInscEstadual",gxvar:"A7219FilialSTInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7219FilialSTInscEstadual=Value},v2z:function(Value){gx.O.Z7219FilialSTInscEstadual=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALSTINSCESTADUAL",row || gx.fn.currentGridRowImpl(46),gx.O.A7219FilialSTInscEstadual,0)},c2v:function(){gx.O.A7219FilialSTInscEstadual=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALSTINSCESTADUAL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSTUSUALTERACAO",gxz:"Z7220FilialSTUsuAlteracao",gxold:"O7220FilialSTUsuAlteracao",gxvar:"A7220FilialSTUsuAlteracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7220FilialSTUsuAlteracao=Value},v2z:function(Value){gx.O.Z7220FilialSTUsuAlteracao=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALSTUSUALTERACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A7220FilialSTUsuAlteracao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7220FilialSTUsuAlteracao=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALSTUSUALTERACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALSTDATAHORAALT",gxz:"Z7221FilialSTDataHoraAlt",gxold:"O7221FilialSTDataHoraAlt",gxvar:"A7221FilialSTDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7221FilialSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7221FilialSTDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALSTDATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A7221FilialSTDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7221FilialSTDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FILIALSTDATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cFilialSTEmpresaId = "" ;
   this.ZV6cFilialSTEmpresaId = "" ;
   this.OV6cFilialSTEmpresaId = "" ;
   this.AV7cFilialSTFilialId = 0 ;
   this.ZV7cFilialSTFilialId = 0 ;
   this.OV7cFilialSTFilialId = 0 ;
   this.AV8cFilialSTUF = "" ;
   this.ZV8cFilialSTUF = "" ;
   this.OV8cFilialSTUF = "" ;
   this.AV9cFilialSTInscEstadual = "" ;
   this.ZV9cFilialSTInscEstadual = "" ;
   this.OV9cFilialSTInscEstadual = "" ;
   this.AV10cFilialSTUsuAlteracao = "" ;
   this.ZV10cFilialSTUsuAlteracao = "" ;
   this.OV10cFilialSTUsuAlteracao = "" ;
   this.AV11cFilialSTDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cFilialSTDataHoraAlt = gx.date.nullDate() ;
   this.OV11cFilialSTDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7222FilialSTEmpresaId = "" ;
   this.O7222FilialSTEmpresaId = "" ;
   this.Z7223FilialSTFilialId = 0 ;
   this.O7223FilialSTFilialId = 0 ;
   this.Z7224FilialSTUF = "" ;
   this.O7224FilialSTUF = "" ;
   this.Z7219FilialSTInscEstadual = "" ;
   this.O7219FilialSTInscEstadual = "" ;
   this.Z7220FilialSTUsuAlteracao = "" ;
   this.O7220FilialSTUsuAlteracao = "" ;
   this.Z7221FilialSTDataHoraAlt = gx.date.nullDate() ;
   this.O7221FilialSTDataHoraAlt = gx.date.nullDate() ;
   this.AV6cFilialSTEmpresaId = "" ;
   this.AV7cFilialSTFilialId = 0 ;
   this.AV8cFilialSTUF = "" ;
   this.AV9cFilialSTInscEstadual = "" ;
   this.AV10cFilialSTUsuAlteracao = "" ;
   this.AV11cFilialSTDataHoraAlt = gx.date.nullDate() ;
   this.AV12pFilialSTEmpresaId = "" ;
   this.AV13pFilialSTFilialId = 0 ;
   this.AV14pFilialSTUF = "" ;
   this.AV5LinkSelection = "" ;
   this.A7222FilialSTEmpresaId = "" ;
   this.A7223FilialSTFilialId = 0 ;
   this.A7224FilialSTUF = "" ;
   this.A7219FilialSTInscEstadual = "" ;
   this.A7220FilialSTUsuAlteracao = "" ;
   this.A7221FilialSTDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131tw2_client": ["ENTER", true] ,"e141tw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialSTEmpresaId',fld:'vCFILIALSTEMPRESAID'},{av:'AV7cFilialSTFilialId',fld:'vCFILIALSTFILIALID'},{av:'AV8cFilialSTUF',fld:'vCFILIALSTUF'},{av:'AV9cFilialSTInscEstadual',fld:'vCFILIALSTINSCESTADUAL'},{av:'AV10cFilialSTUsuAlteracao',fld:'vCFILIALSTUSUALTERACAO'},{av:'AV11cFilialSTDataHoraAlt',fld:'vCFILIALSTDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7222FilialSTEmpresaId',fld:'FILIALSTEMPRESAID'},{av:'A7223FilialSTFilialId',fld:'FILIALSTFILIALID'},{av:'A7224FilialSTUF',fld:'FILIALSTUF'}],[{av:'AV12pFilialSTEmpresaId',fld:'vPFILIALSTEMPRESAID'},{av:'AV13pFilialSTFilialId',fld:'vPFILIALSTFILIALID'},{av:'AV14pFilialSTUF',fld:'vPFILIALSTUF'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialSTEmpresaId',fld:'vCFILIALSTEMPRESAID'},{av:'AV7cFilialSTFilialId',fld:'vCFILIALSTFILIALID'},{av:'AV8cFilialSTUF',fld:'vCFILIALSTUF'},{av:'AV9cFilialSTInscEstadual',fld:'vCFILIALSTINSCESTADUAL'},{av:'AV10cFilialSTUsuAlteracao',fld:'vCFILIALSTUSUALTERACAO'},{av:'AV11cFilialSTDataHoraAlt',fld:'vCFILIALSTDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialSTEmpresaId',fld:'vCFILIALSTEMPRESAID'},{av:'AV7cFilialSTFilialId',fld:'vCFILIALSTFILIALID'},{av:'AV8cFilialSTUF',fld:'vCFILIALSTUF'},{av:'AV9cFilialSTInscEstadual',fld:'vCFILIALSTINSCESTADUAL'},{av:'AV10cFilialSTUsuAlteracao',fld:'vCFILIALSTUSUALTERACAO'},{av:'AV11cFilialSTDataHoraAlt',fld:'vCFILIALSTDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialSTEmpresaId',fld:'vCFILIALSTEMPRESAID'},{av:'AV7cFilialSTFilialId',fld:'vCFILIALSTFILIALID'},{av:'AV8cFilialSTUF',fld:'vCFILIALSTUF'},{av:'AV9cFilialSTInscEstadual',fld:'vCFILIALSTINSCESTADUAL'},{av:'AV10cFilialSTUsuAlteracao',fld:'vCFILIALSTUSUALTERACAO'},{av:'AV11cFilialSTDataHoraAlt',fld:'vCFILIALSTDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFilialSTEmpresaId',fld:'vCFILIALSTEMPRESAID'},{av:'AV7cFilialSTFilialId',fld:'vCFILIALSTFILIALID'},{av:'AV8cFilialSTUF',fld:'vCFILIALSTUF'},{av:'AV9cFilialSTInscEstadual',fld:'vCFILIALSTINSCESTADUAL'},{av:'AV10cFilialSTUsuAlteracao',fld:'vCFILIALSTUSUALTERACAO'},{av:'AV11cFilialSTDataHoraAlt',fld:'vCFILIALSTDATAHORAALT'}],[]];
   this.setVCMap("AV12pFilialSTEmpresaId", "vPFILIALSTEMPRESAID", 0, "char");
   this.setVCMap("AV13pFilialSTFilialId", "vPFILIALSTFILIALID", 0, "int");
   this.setVCMap("AV14pFilialSTUF", "vPFILIALSTUF", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fj0());
