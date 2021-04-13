/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:5.50
*/
gx.evt.autoSkip = false;
gx.define('gx0em0', false, function () {
   this.ServerClass =  "gx0em0" ;
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
      this.AV13pApuracaoEmpresaId=gx.fn.getControlValue("vPAPURACAOEMPRESAID") ;
      this.AV14pApuracaoTipo=gx.fn.getControlValue("vPAPURACAOTIPO") ;
      this.AV15pApuracaoFilialEmpId=gx.fn.getControlValue("vPAPURACAOFILIALEMPID") ;
      this.AV16pApuracaoFilialId=gx.fn.getIntegerValue("vPAPURACAOFILIALID",'.') ;
      this.AV17pApuracaoData=gx.fn.getDateValue("vPAPURACAODATA") ;
      this.AV18pApuracaoSequencia=gx.fn.getIntegerValue("vPAPURACAOSEQUENCIA",'.') ;
   };
   this.Validv_Capuracaouf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAPURACAOUF");
         this.AnyError  = 0;
         if ( ! ( this.AV12cApuracaoUF == "" || this.AV12cApuracaoUF == "AC" || this.AV12cApuracaoUF == "AL" || this.AV12cApuracaoUF == "AP" || this.AV12cApuracaoUF == "AM" || this.AV12cApuracaoUF == "BA" || this.AV12cApuracaoUF == "CE" || this.AV12cApuracaoUF == "DF" || this.AV12cApuracaoUF == "ES" || this.AV12cApuracaoUF == "GO" || this.AV12cApuracaoUF == "MA" || this.AV12cApuracaoUF == "MT" || this.AV12cApuracaoUF == "MS" || this.AV12cApuracaoUF == "MG" || this.AV12cApuracaoUF == "PA" || this.AV12cApuracaoUF == "PB" || this.AV12cApuracaoUF == "PR" || this.AV12cApuracaoUF == "PE" || this.AV12cApuracaoUF == "PI" || this.AV12cApuracaoUF == "RJ" || this.AV12cApuracaoUF == "RN" || this.AV12cApuracaoUF == "RS" || this.AV12cApuracaoUF == "RO" || this.AV12cApuracaoUF == "RR" || this.AV12cApuracaoUF == "SC" || this.AV12cApuracaoUF == "SP" || this.AV12cApuracaoUF == "SE" || this.AV12cApuracaoUF == "TO" || this.AV12cApuracaoUF == "EX" || (""==this.AV12cApuracaoUF) ) )
         {
            try {
               gxballoon.setError("Campo cApuracaoUF fora do intervalo");
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
   this.e131sz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141sz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0em0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6676,53,"APURACAOEMPRESAID","Empresa Apuração","","ApuracaoEmpresaId","char",0,"px",10,10,"left",null,[],6676,"ApuracaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6677,54,"APURACAOTIPO","Tipo","","ApuracaoTipo","char",0,"px",1,1,"left",null,[],6677,"ApuracaoTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6678,55,"APURACAOFILIALEMPID","Empresa Filial","","ApuracaoFilialEmpId","char",0,"px",10,10,"left",null,[],6678,"ApuracaoFilialEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6679,56,"APURACAOFILIALID","Código Filial","","ApuracaoFilialId","int",0,"px",7,7,"right",null,[],6679,"ApuracaoFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6680,57,"APURACAODATA","Data Apuração","","ApuracaoData","date",0,"px",10,10,"right",null,[],6680,"ApuracaoData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6681,58,"APURACAOSEQUENCIA","Sequência Apuração","","ApuracaoSequencia","int",0,"px",2,2,"right",null,[],6681,"ApuracaoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(6672,59,"APURACAOUF","UF Apuração","ApuracaoUF","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(6673,60,"APURACAOVALOR","Valor Apuração","","ApuracaoValor","decimal",0,"px",22,22,"right",null,[],6673,"ApuracaoValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAPURACAOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOEMPRESAID",gxz:"ZV6cApuracaoEmpresaId",gxold:"OV6cApuracaoEmpresaId",gxvar:"AV6cApuracaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cApuracaoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cApuracaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOEMPRESAID",gx.O.AV6cApuracaoEmpresaId,0)},c2v:function(){gx.O.AV6cApuracaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAPURACAOTIPO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOTIPO",gxz:"ZV7cApuracaoTipo",gxold:"OV7cApuracaoTipo",gxvar:"AV7cApuracaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cApuracaoTipo=Value},v2z:function(Value){gx.O.ZV7cApuracaoTipo=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOTIPO",gx.O.AV7cApuracaoTipo,0)},c2v:function(){gx.O.AV7cApuracaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAPURACAOFILIALEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOFILIALEMPID",gxz:"ZV8cApuracaoFilialEmpId",gxold:"OV8cApuracaoFilialEmpId",gxvar:"AV8cApuracaoFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cApuracaoFilialEmpId=Value},v2z:function(Value){gx.O.ZV8cApuracaoFilialEmpId=Value},v2c:function(){gx.fn.setControlValue("vCAPURACAOFILIALEMPID",gx.O.AV8cApuracaoFilialEmpId,0)},c2v:function(){gx.O.AV8cApuracaoFilialEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOFILIALEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAPURACAOFILIALID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOFILIALID",gxz:"ZV9cApuracaoFilialId",gxold:"OV9cApuracaoFilialId",gxvar:"AV9cApuracaoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cApuracaoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cApuracaoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPURACAOFILIALID",gx.O.AV9cApuracaoFilialId,0)},c2v:function(){gx.O.AV9cApuracaoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPURACAOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAPURACAODATA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAODATA",gxz:"ZV10cApuracaoData",gxold:"OV10cApuracaoData",gxvar:"AV10cApuracaoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cApuracaoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cApuracaoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAPURACAODATA",gx.O.AV10cApuracaoData,0)},c2v:function(){gx.O.AV10cApuracaoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAPURACAODATA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKAPURACAOSEQUENCIA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOSEQUENCIA",gxz:"ZV11cApuracaoSequencia",gxold:"OV11cApuracaoSequencia",gxvar:"AV11cApuracaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cApuracaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cApuracaoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAPURACAOSEQUENCIA",gx.O.AV11cApuracaoSequencia,0)},c2v:function(){gx.O.AV11cApuracaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAPURACAOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAPURACAOUF", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Capuracaouf,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAPURACAOUF",gxz:"ZV12cApuracaoUF",gxold:"OV12cApuracaoUF",gxvar:"AV12cApuracaoUF",ucs:[],op:[44],ip:[44],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12cApuracaoUF=Value},v2z:function(Value){gx.O.ZV12cApuracaoUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCAPURACAOUF",gx.O.AV12cApuracaoUF)},c2v:function(){gx.O.AV12cApuracaoUF=this.val()},val:function(){return gx.fn.getControlValue("vCAPURACAOUF")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOEMPRESAID",gxz:"Z6676ApuracaoEmpresaId",gxold:"O6676ApuracaoEmpresaId",gxvar:"A6676ApuracaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6676ApuracaoEmpresaId=Value},v2z:function(Value){gx.O.Z6676ApuracaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A6676ApuracaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6676ApuracaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOTIPO",gxz:"Z6677ApuracaoTipo",gxold:"O6677ApuracaoTipo",gxvar:"A6677ApuracaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6677ApuracaoTipo=Value},v2z:function(Value){gx.O.Z6677ApuracaoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A6677ApuracaoTipo,0)},c2v:function(){gx.O.A6677ApuracaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOFILIALEMPID",gxz:"Z6678ApuracaoFilialEmpId",gxold:"O6678ApuracaoFilialEmpId",gxvar:"A6678ApuracaoFilialEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6678ApuracaoFilialEmpId=Value},v2z:function(Value){gx.O.Z6678ApuracaoFilialEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("APURACAOFILIALEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A6678ApuracaoFilialEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6678ApuracaoFilialEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOFILIALEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOFILIALID",gxz:"Z6679ApuracaoFilialId",gxold:"O6679ApuracaoFilialId",gxvar:"A6679ApuracaoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6679ApuracaoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6679ApuracaoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOFILIALID",row || gx.fn.currentGridRowImpl(51),gx.O.A6679ApuracaoFilialId,0)},c2v:function(){gx.O.A6679ApuracaoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APURACAOFILIALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAODATA",gxz:"Z6680ApuracaoData",gxold:"O6680ApuracaoData",gxvar:"A6680ApuracaoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6680ApuracaoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6680ApuracaoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAODATA",row || gx.fn.currentGridRowImpl(51),gx.O.A6680ApuracaoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6680ApuracaoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("APURACAODATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOSEQUENCIA",gxz:"Z6681ApuracaoSequencia",gxold:"O6681ApuracaoSequencia",gxvar:"A6681ApuracaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6681ApuracaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6681ApuracaoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("APURACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A6681ApuracaoSequencia,0)},c2v:function(){gx.O.A6681ApuracaoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("APURACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOUF",gxz:"Z6672ApuracaoUF",gxold:"O6672ApuracaoUF",gxvar:"A6672ApuracaoUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A6672ApuracaoUF=Value},v2z:function(Value){gx.O.Z6672ApuracaoUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("APURACAOUF",row || gx.fn.currentGridRowImpl(51),gx.O.A6672ApuracaoUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6672ApuracaoUF=this.val()},val:function(row){return gx.fn.getGridControlValue("APURACAOUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"APURACAOVALOR",gxz:"Z6673ApuracaoValor",gxold:"O6673ApuracaoValor",gxvar:"A6673ApuracaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6673ApuracaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z6673ApuracaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("APURACAOVALOR",row || gx.fn.currentGridRowImpl(51),gx.O.A6673ApuracaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6673ApuracaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("APURACAOVALOR",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cApuracaoEmpresaId = "" ;
   this.ZV6cApuracaoEmpresaId = "" ;
   this.OV6cApuracaoEmpresaId = "" ;
   this.AV7cApuracaoTipo = "" ;
   this.ZV7cApuracaoTipo = "" ;
   this.OV7cApuracaoTipo = "" ;
   this.AV8cApuracaoFilialEmpId = "" ;
   this.ZV8cApuracaoFilialEmpId = "" ;
   this.OV8cApuracaoFilialEmpId = "" ;
   this.AV9cApuracaoFilialId = 0 ;
   this.ZV9cApuracaoFilialId = 0 ;
   this.OV9cApuracaoFilialId = 0 ;
   this.AV10cApuracaoData = gx.date.nullDate() ;
   this.ZV10cApuracaoData = gx.date.nullDate() ;
   this.OV10cApuracaoData = gx.date.nullDate() ;
   this.AV11cApuracaoSequencia = 0 ;
   this.ZV11cApuracaoSequencia = 0 ;
   this.OV11cApuracaoSequencia = 0 ;
   this.AV12cApuracaoUF = "" ;
   this.ZV12cApuracaoUF = "" ;
   this.OV12cApuracaoUF = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6676ApuracaoEmpresaId = "" ;
   this.O6676ApuracaoEmpresaId = "" ;
   this.Z6677ApuracaoTipo = "" ;
   this.O6677ApuracaoTipo = "" ;
   this.Z6678ApuracaoFilialEmpId = "" ;
   this.O6678ApuracaoFilialEmpId = "" ;
   this.Z6679ApuracaoFilialId = 0 ;
   this.O6679ApuracaoFilialId = 0 ;
   this.Z6680ApuracaoData = gx.date.nullDate() ;
   this.O6680ApuracaoData = gx.date.nullDate() ;
   this.Z6681ApuracaoSequencia = 0 ;
   this.O6681ApuracaoSequencia = 0 ;
   this.Z6672ApuracaoUF = "" ;
   this.O6672ApuracaoUF = "" ;
   this.Z6673ApuracaoValor = 0 ;
   this.O6673ApuracaoValor = 0 ;
   this.AV6cApuracaoEmpresaId = "" ;
   this.AV7cApuracaoTipo = "" ;
   this.AV8cApuracaoFilialEmpId = "" ;
   this.AV9cApuracaoFilialId = 0 ;
   this.AV10cApuracaoData = gx.date.nullDate() ;
   this.AV11cApuracaoSequencia = 0 ;
   this.AV12cApuracaoUF = "" ;
   this.AV13pApuracaoEmpresaId = "" ;
   this.AV14pApuracaoTipo = "" ;
   this.AV15pApuracaoFilialEmpId = "" ;
   this.AV16pApuracaoFilialId = 0 ;
   this.AV17pApuracaoData = gx.date.nullDate() ;
   this.AV18pApuracaoSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A6676ApuracaoEmpresaId = "" ;
   this.A6677ApuracaoTipo = "" ;
   this.A6678ApuracaoFilialEmpId = "" ;
   this.A6679ApuracaoFilialId = 0 ;
   this.A6680ApuracaoData = gx.date.nullDate() ;
   this.A6681ApuracaoSequencia = 0 ;
   this.A6672ApuracaoUF = "" ;
   this.A6673ApuracaoValor = 0 ;
   this.Events = {"e131sz2_client": ["ENTER", true] ,"e141sz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoEmpresaId',fld:'vCAPURACAOEMPRESAID'},{av:'AV7cApuracaoTipo',fld:'vCAPURACAOTIPO'},{av:'AV8cApuracaoFilialEmpId',fld:'vCAPURACAOFILIALEMPID'},{av:'AV9cApuracaoFilialId',fld:'vCAPURACAOFILIALID'},{av:'AV10cApuracaoData',fld:'vCAPURACAODATA'},{av:'AV11cApuracaoSequencia',fld:'vCAPURACAOSEQUENCIA'},{av:'AV12cApuracaoUF',fld:'vCAPURACAOUF'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6676ApuracaoEmpresaId',fld:'APURACAOEMPRESAID'},{av:'A6677ApuracaoTipo',fld:'APURACAOTIPO'},{av:'A6678ApuracaoFilialEmpId',fld:'APURACAOFILIALEMPID'},{av:'A6679ApuracaoFilialId',fld:'APURACAOFILIALID'},{av:'A6680ApuracaoData',fld:'APURACAODATA'},{av:'A6681ApuracaoSequencia',fld:'APURACAOSEQUENCIA'}],[{av:'AV13pApuracaoEmpresaId',fld:'vPAPURACAOEMPRESAID'},{av:'AV14pApuracaoTipo',fld:'vPAPURACAOTIPO'},{av:'AV15pApuracaoFilialEmpId',fld:'vPAPURACAOFILIALEMPID'},{av:'AV16pApuracaoFilialId',fld:'vPAPURACAOFILIALID'},{av:'AV17pApuracaoData',fld:'vPAPURACAODATA'},{av:'AV18pApuracaoSequencia',fld:'vPAPURACAOSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoEmpresaId',fld:'vCAPURACAOEMPRESAID'},{av:'AV7cApuracaoTipo',fld:'vCAPURACAOTIPO'},{av:'AV8cApuracaoFilialEmpId',fld:'vCAPURACAOFILIALEMPID'},{av:'AV9cApuracaoFilialId',fld:'vCAPURACAOFILIALID'},{av:'AV10cApuracaoData',fld:'vCAPURACAODATA'},{av:'AV11cApuracaoSequencia',fld:'vCAPURACAOSEQUENCIA'},{av:'AV12cApuracaoUF',fld:'vCAPURACAOUF'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoEmpresaId',fld:'vCAPURACAOEMPRESAID'},{av:'AV7cApuracaoTipo',fld:'vCAPURACAOTIPO'},{av:'AV8cApuracaoFilialEmpId',fld:'vCAPURACAOFILIALEMPID'},{av:'AV9cApuracaoFilialId',fld:'vCAPURACAOFILIALID'},{av:'AV10cApuracaoData',fld:'vCAPURACAODATA'},{av:'AV11cApuracaoSequencia',fld:'vCAPURACAOSEQUENCIA'},{av:'AV12cApuracaoUF',fld:'vCAPURACAOUF'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoEmpresaId',fld:'vCAPURACAOEMPRESAID'},{av:'AV7cApuracaoTipo',fld:'vCAPURACAOTIPO'},{av:'AV8cApuracaoFilialEmpId',fld:'vCAPURACAOFILIALEMPID'},{av:'AV9cApuracaoFilialId',fld:'vCAPURACAOFILIALID'},{av:'AV10cApuracaoData',fld:'vCAPURACAODATA'},{av:'AV11cApuracaoSequencia',fld:'vCAPURACAOSEQUENCIA'},{av:'AV12cApuracaoUF',fld:'vCAPURACAOUF'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cApuracaoEmpresaId',fld:'vCAPURACAOEMPRESAID'},{av:'AV7cApuracaoTipo',fld:'vCAPURACAOTIPO'},{av:'AV8cApuracaoFilialEmpId',fld:'vCAPURACAOFILIALEMPID'},{av:'AV9cApuracaoFilialId',fld:'vCAPURACAOFILIALID'},{av:'AV10cApuracaoData',fld:'vCAPURACAODATA'},{av:'AV11cApuracaoSequencia',fld:'vCAPURACAOSEQUENCIA'},{av:'AV12cApuracaoUF',fld:'vCAPURACAOUF'}],[]];
   this.setVCMap("AV13pApuracaoEmpresaId", "vPAPURACAOEMPRESAID", 0, "char");
   this.setVCMap("AV14pApuracaoTipo", "vPAPURACAOTIPO", 0, "char");
   this.setVCMap("AV15pApuracaoFilialEmpId", "vPAPURACAOFILIALEMPID", 0, "char");
   this.setVCMap("AV16pApuracaoFilialId", "vPAPURACAOFILIALID", 0, "int");
   this.setVCMap("AV17pApuracaoData", "vPAPURACAODATA", 0, "date");
   this.setVCMap("AV18pApuracaoSequencia", "vPAPURACAOSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0em0());
